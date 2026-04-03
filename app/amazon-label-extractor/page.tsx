import type { Metadata } from 'next';
import { MainLayout } from '@/components/main-layout';
import { AmazonLabelExtractor } from '@/components/amazon-label-extractor';

export const metadata: Metadata = {
  title: 'Amazon Label Extractor | Bunny Calculator',
  description: 'Strip invoice pages from Amazon Easy Ship PDFs and download a clean file containing only your shipping labels. Runs entirely in your browser — no uploads.',
  keywords: 'amazon easy ship, label extractor, pdf tool, shipping label, invoice remover',
};

export default function AmazonLabelExtractorPage() {
  return (
    <MainLayout>
      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Amazon Label Extractor
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your Amazon Easy Ship PDF and instantly download a new file containing only the shipping labels — all invoice pages are automatically removed.
            </p>
          </div>

          {/* Tool */}
          <AmazonLabelExtractor />

          {/* Guide */}
          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-4">How does it work?</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li><strong>Upload your PDF:</strong> Drag and drop (or click to browse) your Amazon Easy Ship PDF onto the upload zone.</li>
              <li><strong>Automatic extraction:</strong> The tool reads every page and keeps only the odd-numbered pages — these are always the shipping labels in the Easy Ship format.</li>
              <li><strong>Download:</strong> A new file called <code className="text-xs bg-muted px-1 py-0.5 rounded">amazon_labels.pdf</code> downloads automatically, ready to print.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why use this tool?</h2>
            <p className="text-muted-foreground">
              Amazon Easy Ship documents interleave a shipping label and an invoice for every order. When printing in bulk, wasting paper and ink on invoices adds up quickly. This tool strips the invoices out so you can print a clean sheet of labels in one go — saving time and paper.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Is my data safe?</h2>
            <p className="text-muted-foreground">
              Completely. The PDF is processed using <strong>pdf-lib</strong> directly inside your browser — no file is ever uploaded to any server. Your order data stays entirely on your device.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
