'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useMemo, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Import data from multiple years
import records2024 from '@/lib/Data/d-2024.json';
import records2025 from '@/lib/Data/d-2025.json';
import records2026 from '@/lib/Data/d-2026.json';

interface CorporateAction {
  SYMBOL: string;
  "COMPANY NAME": string;
  SERIES: string;
  PURPOSE: string;
  "FACE VALUE": number;
  "EX-DATE": string;
  "RECORD DATE": string;
}

export type CorporateActionType = 'split-demerger' | 'dividend' | 'bonus-buyback';

interface Props {
  type: CorporateActionType;
}

export function CorporateActionPreview({ type }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);

  const allRecords = useMemo(() => {
    // Merge all records into a single array
    const merged = [
      ...(records2024 as CorporateAction[]),
      ...(records2025 as CorporateAction[]),
      ...(records2026 as CorporateAction[])
    ];

    // Filter based on type
    return merged.filter(r => {
      const purpose = r.PURPOSE.toLowerCase();
      if (type === 'split-demerger') {
        return purpose.includes('face value split') || purpose.includes('demerger');
      }
      if (type === 'dividend') {
        return purpose.includes('dividend') || purpose.includes('bonus') || purpose.includes('interest');
      }
      if (type === 'bonus-buyback') {
        return purpose.includes('bonus') || purpose.includes('buy back');
      }
      return false;
    });
  }, [type]);

  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    allRecords.forEach(r => {
      const yearStr = r["EX-DATE"].split('-').pop()?.trim();
      if (yearStr) {
        const fullYear = yearStr.length === 2 ? '20' + yearStr : yearStr;
        if (fullYear.length === 4 && !isNaN(Number(fullYear))) {
          yearsSet.add(fullYear);
        }
      }
    });
    return Array.from(yearsSet).sort((a, b) => a.localeCompare(b));
  }, [allRecords]);

  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[years.length - 1]); // Default to latest year
    }
  }, [years, selectedYear]);

  const yearRecords = useMemo(() => {
    if (!selectedYear) return [];

    let filtered = allRecords.filter(r => {
      const yearStr = r["EX-DATE"].split('-').pop()?.trim();
      const fullYear = (yearStr && yearStr.length === 2) ? '20' + yearStr : yearStr;
      return fullYear === selectedYear;
    });

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(r =>
        r.SYMBOL.toLowerCase().includes(lowerSearch) ||
        r["COMPANY NAME"].toLowerCase().includes(lowerSearch)
      );
    }

    return filtered.sort((a, b) => {
        const dateA = new Date(a["EX-DATE"]);
        const dateB = new Date(b["EX-DATE"]);
        return dateB.getTime() - dateA.getTime();
    });
  }, [allRecords, selectedYear, searchTerm]);

  if (!selectedYear && years.length > 0) return <div className="p-12 text-center animate-pulse text-muted-foreground">Initializing Corporate Actions...</div>;

  const handleYearChange = (direction: 'next' | 'prev') => {
    const currentIndex = years.indexOf(selectedYear);
    if (direction === 'next' && currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1]);
    }
    setVisibleCount(24); // Reset when year changes
  };

  return (
    <div className="py-6 space-y-6">
      {/* Search and Filter Section - Consistent with site controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 bg-muted/50 p-1 rounded-lg border border-border">
            {years.indexOf(selectedYear) > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleYearChange('prev')}
                className="h-8 font-bold text-xs"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                {years[years.indexOf(selectedYear) - 1]}
              </Button>
            )}

            <div className="px-3 text-xs font-bold text-primary italic">
              {selectedYear}
            </div>

            {years.indexOf(selectedYear) < years.length - 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleYearChange('next')}
                className="h-8 font-bold text-xs"
              >
                {years[years.indexOf(selectedYear) + 1]}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>

          <div className="relative group min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
            <Input
              type="text"
              placeholder="Filter by symbol..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(24); // Reset pagination on search
              }}
              className="pl-9 h-10 w-full bg-card shadow-sm rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": yearRecords.slice(0, 50).map((record, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": `${record.SYMBOL}: ${record.PURPOSE}`,
                "startDate": new Date(record["EX-DATE"]).toISOString().split('T')[0],
                "description": `${record["COMPANY NAME"]} announced ${record.PURPOSE}. Ex-date: ${record["EX-DATE"]}.`,
                "location": {
                  "@type": "Place",
                  "name": "NSE/BSE India"
                }
              }
            }))
          })
        }}
      />

      <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {yearRecords.slice(0, visibleCount).map((record, idx) => (
          <article
            key={`${record.SYMBOL}-${idx}`}
            className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-3 relative"
          >
            <div className="flex justify-between items-start">
              <span className="bg-secondary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">
                {record.SYMBOL}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground opacity-60">
                EQ
              </span>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-[13px] font-bold text-card-foreground line-clamp-1 uppercase leading-snug">
                {record["COMPANY NAME"]}
              </h2>
              <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3 h-[48px]">
                {record.PURPOSE}
              </p>
            </div>

            <div className="pt-3 border-t border-dashed border-border space-y-1.5">
              <div className="text-[11px] text-destructive flex justify-between">
                <span>Ex-Date:</span>
                <time dateTime={new Date(record["EX-DATE"]).toISOString().split('T')[0]}>{record["EX-DATE"]}</time>
              </div>
              {record["RECORD DATE"] !== "-" && (
                <div className="text-[11px] text-destructive flex justify-between">
                  <span>Record Date:</span>
                  <span>{record["RECORD DATE"]}</span>
                </div>
              )}
              <div className="text-[11px] text-muted-foreground flex justify-between">
                <span>Face Value:</span>
                <span className="text-primary font-bold">{record["FACE VALUE"]}</span>
              </div>
            </div>
          </article>
        ))}

        {yearRecords.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground bg-white/50 border border-dashed rounded-xl">
            No records match your search criteria for {selectedYear}.
          </div>
        )}
        </div>
        
        {visibleCount < yearRecords.length && (
          <div className="flex justify-center mt-8 pb-4">
            <Button 
              variant="outline" 
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="w-full sm:w-auto"
            >
              Load More Announcements
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
