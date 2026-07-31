import type { Metadata } from "next";
import { ResumeActions } from "@/components/resume/resume-actions";
import { ResumeDocument } from "@/components/resume/resume-document";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name} — ${site.role}. ${site.shortBio}`,
};

export default function ResumePage() {
  return (
    <div className="bg-bg-soft min-h-screen print:bg-white">
      <ResumeActions />
      <div className="px-4 py-8 print:p-0">
        <div className="border-border mx-auto max-w-3xl overflow-hidden rounded-2xl border shadow-xl print:rounded-none print:border-0 print:shadow-none">
          <ResumeDocument />
        </div>
        <p className="no-print text-fg-subtle mx-auto mt-5 max-w-3xl text-center text-xs">
          Tip: &ldquo;Download PDF&rdquo; opens your browser&apos;s print dialog — choose
          &ldquo;Save as PDF&rdquo; for a pixel-perfect, ATS-friendly copy.
        </p>
      </div>
    </div>
  );
}
