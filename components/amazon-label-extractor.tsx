'use client';

import { useState, useCallback, useRef, DragEvent, ChangeEvent } from 'react';
import { PDFDocument } from 'pdf-lib';
import { UploadCloud, Loader2, AlertCircle, Download, RotateCcw, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dynamically import PDF.js to avoid SSR issues and set worker via CDN
async function loadPdfJs() {
  const lib = await import('pdfjs-dist');
  if (!lib.GlobalWorkerOptions.workerSrc) {
    lib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${lib.version}/build/pdf.worker.min.mjs`;
  }
  return lib;
}

type AppState = 'idle' | 'dragover' | 'loading' | 'ready' | 'downloading' | 'error';

interface PageItem {
  index: number;   // 0-based (for pdf-lib)
  number: number;  // 1-based (for display)
  thumbnail: string;
  selected: boolean;
}

export function AmazonLabelExtractor() {
  const [state, setState] = useState<AppState>('idle');
  const [pages, setPages] = useState<PageItem[]>([]);
  const [fileName, setFileName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // Keep a separate buffer copy for pdf-lib (PDF.js may transfer/detach the original)
  const pdfBufferRef = useRef<ArrayBuffer | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('Please upload a valid PDF file.');
      setState('error');
      return;
    }

    setFileName(file.name);
    setState('loading');
    setErrorMsg('');
    setPages([]);

    try {
      const rawBuffer = await file.arrayBuffer();
      // Store a copy for pdf-lib; pass a separate copy to PDF.js
      pdfBufferRef.current = rawBuffer.slice(0);

      const pdfjsLib = await loadPdfJs();
      const pdfDoc = await pdfjsLib.getDocument({ data: rawBuffer.slice(0) }).promise;
      const numPages = pdfDoc.numPages;

      if (numPages === 0) throw new Error('The PDF contains no pages.');

      const items: PageItem[] = [];
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        // Scale to produce ~160-200px wide thumbnails regardless of page size
        const baseViewport = page.getViewport({ scale: 1 });
        const scale = 180 / baseViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvas, viewport }).promise;

        items.push({
          index: pageNum - 1,
          number: pageNum,
          thumbnail: canvas.toDataURL('image/jpeg', 0.8),
          selected: pageNum % 2 === 1, // default: odd pages (shipping labels)
        });
      }

      setPages(items);
      setState('ready');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to process PDF.');
      setState('error');
    }
  }, []);

  // ── Drag & drop handlers ─────────────────────────────────────────────────
  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setState('idle');
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setState('dragover');
  }, []);

  const handleDragLeave = useCallback(() => setState('idle'), []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    e.target.value = '';
  }, [processFile]);

  // ── Page selection ───────────────────────────────────────────────────────
  const togglePage = (index: number) =>
    setPages(prev => prev.map(p => p.index === index ? { ...p, selected: !p.selected } : p));

  const selectOdd  = () => setPages(prev => prev.map(p => ({ ...p, selected: p.number % 2 === 1 })));
  const selectEven = () => setPages(prev => prev.map(p => ({ ...p, selected: p.number % 2 === 0 })));
  const selectAll  = () => setPages(prev => prev.map(p => ({ ...p, selected: true })));
  const selectNone = () => setPages(prev => prev.map(p => ({ ...p, selected: false })));

  // ── Download ─────────────────────────────────────────────────────────────
  const download = async () => {
    if (!pdfBufferRef.current) return;
    const indices = pages.filter(p => p.selected).map(p => p.index);
    if (!indices.length) return;

    setState('downloading');
    try {
      const srcDoc = await PDFDocument.load(pdfBufferRef.current.slice(0));
      const outDoc = await PDFDocument.create();
      const copied = await outDoc.copyPages(srcDoc, indices);
      copied.forEach((page: any) => outDoc.addPage(page));

      const bytes = await outDoc.save();
      const blob = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'amazon_labels.pdf';
      a.click();
      URL.revokeObjectURL(url);

      setState('ready');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to generate PDF.');
      setState('error');
    }
  };

  const reset = () => {
    setState('idle');
    setPages([]);
    setFileName('');
    setErrorMsg('');
    pdfBufferRef.current = null;
  };

  const selectedCount = pages.filter(p => p.selected).length;

  // ── Upload zone (idle / dragover) ────────────────────────────────────────
  if (state === 'idle' || state === 'dragover') {
    return (
      <div className="w-full space-y-6">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label="Upload Amazon Easy Ship PDF"
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
          className={cn(
            'flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-16 text-center cursor-pointer transition-all duration-200',
            state === 'dragover'
              ? 'border-primary bg-primary/5 scale-[1.01]'
              : 'border-border bg-muted/20 hover:border-primary hover:bg-primary/5'
          )}
        >
          <input ref={inputRef} type="file" accept=".pdf,application/pdf" className="hidden" onChange={handleChange} />
          <div className={cn('rounded-full p-4 transition-colors', state === 'dragover' ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground')}>
            <UploadCloud className="h-10 w-10" />
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">
              {state === 'dragover' ? 'Drop your PDF here' : 'Drag & drop your Easy Ship PDF'}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              or <span className="text-primary font-medium underline underline-offset-2">click to browse</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">Processed entirely in your browser — your files stay private</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {([
            { icon: '🔒', title: '100% Private',   body: 'Your PDF never leaves your device. All processing happens locally in the browser.' },
            { icon: '👁️', title: 'Visual Preview',  body: 'See every page as a thumbnail before downloading — pick exactly what you need.' },
            { icon: '✂️', title: 'Full Control',    body: 'Use quick-select buttons or click individual pages to build your custom export.' },
          ] as const).map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-card p-4 space-y-1.5">
              <div className="text-xl leading-none">{card.icon}</div>
              <p className="font-semibold text-sm text-foreground">{card.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Loading spinner ──────────────────────────────────────────────────────
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-muted/20 p-16 text-center">
        <div className="rounded-full bg-primary/10 p-4 text-primary">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Rendering page previews…</p>
          <p className="mt-1 text-sm text-muted-foreground truncate max-w-xs">{fileName}</p>
        </div>
      </div>
    );
  }

  // ── Error state ──────────────────────────────────────────────────────────
  if (state === 'error') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-destructive/40 bg-destructive/5 p-16 text-center">
        <div className="rounded-full bg-destructive/10 p-4 text-destructive">
          <AlertCircle className="h-10 w-10" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Something went wrong</p>
          <p className="mt-1 text-sm text-destructive">{errorMsg}</p>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
      </div>
    );
  }

  // ── Ready / Downloading — main page-picker UI ────────────────────────────
  return (
    <div className="w-full space-y-5">

      {/* ── Toolbar ── */}
      <div className="rounded-xl border border-border bg-card p-4 space-y-4">

        {/* File name + reset */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-foreground truncate max-w-sm">{fileName}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {pages.length} pages total &middot;{' '}
              <span className={cn('font-medium', selectedCount > 0 ? 'text-primary' : 'text-muted-foreground')}>
                {selectedCount} selected
              </span>
            </p>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Upload new file
          </button>
        </div>

        {/* Quick-select buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground">Quick select:</span>
          {([
            { label: 'Odd pages (Labels)',   action: selectOdd  },
            { label: 'Even pages (Invoices)', action: selectEven },
            { label: 'All',                  action: selectAll  },
            { label: 'None',                 action: selectNone },
          ] as const).map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="px-3 py-1 rounded-md border border-border text-xs font-medium text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Download button */}
        <button
          onClick={download}
          disabled={selectedCount === 0 || state === 'downloading'}
          className={cn(
            'w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            selectedCount > 0 && state !== 'downloading'
              ? 'bg-primary text-primary-foreground hover:opacity-90 active:opacity-80'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          )}
        >
          {state === 'downloading' ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Generating PDF…</>
          ) : (
            <><Download className="h-4 w-4" /> Download {selectedCount} page{selectedCount !== 1 ? 's' : ''} as PDF</>
          )}
        </button>
      </div>

      {/* ── Page grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {pages.map((page) => (
          <button
            key={page.index}
            onClick={() => togglePage(page.index)}
            disabled={state === 'downloading'}
            title={`Page ${page.number} — click to ${page.selected ? 'deselect' : 'select'}`}
            className={cn(
              'relative rounded-xl border-2 overflow-hidden text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              page.selected
                ? 'border-primary shadow-lg shadow-primary/20'
                : 'border-border hover:border-primary/40',
              state === 'downloading' && 'pointer-events-none opacity-60'
            )}
          >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.thumbnail}
              alt={`Page ${page.number}`}
              className="w-full block bg-white"
            />

            {/* Selection tint overlay */}
            <div
              className={cn(
                'absolute inset-0 transition-opacity duration-150',
                page.selected ? 'bg-primary/10' : 'bg-black/0 hover:bg-black/5'
              )}
            />

            {/* Bottom label bar */}
            <div
              className={cn(
                'absolute bottom-0 inset-x-0 py-1 px-2 text-center text-[11px] font-medium',
                page.selected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-black/50 text-white'
              )}
            >
              <span>Page {page.number}</span>
              <span className="opacity-70 ml-1">
                · {page.number % 2 === 1 ? 'Label' : 'Invoice'}
              </span>
            </div>

            {/* Checkmark badge (top-right) */}
            <div
              className={cn(
                'absolute top-1.5 right-1.5 h-5 w-5 rounded-full flex items-center justify-center transition-all duration-150 text-[10px]',
                page.selected
                  ? 'bg-primary text-primary-foreground scale-100 opacity-100'
                  : 'bg-black/30 text-transparent scale-75 opacity-0'
              )}
              aria-hidden="true"
            >
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          </button>
        ))}
      </div>

      {/* Sticky bottom bar for easy access on long PDFs */}
      {pages.length > 12 && (
        <div className="sticky bottom-4 flex justify-center">
          <button
            onClick={download}
            disabled={selectedCount === 0 || state === 'downloading'}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-xl transition-all',
              selectedCount > 0 && state !== 'downloading'
                ? 'bg-primary text-primary-foreground hover:opacity-90'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            )}
          >
            {state === 'downloading' ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</>
            ) : (
              <><Download className="h-4 w-4" /> Download {selectedCount} page{selectedCount !== 1 ? 's' : ''}</>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
