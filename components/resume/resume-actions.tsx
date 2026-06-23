"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { buttonStyles } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function ResumeActions() {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className={cn(buttonStyles("outline"), "px-4 py-2 text-[13px]")}
          >
            <Printer size={15} /> Print
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className={cn(buttonStyles("primary"), "px-4 py-2 text-[13px]")}
          >
            <Download size={15} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
