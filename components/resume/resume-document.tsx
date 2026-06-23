import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { resume } from "@/content/resume";

export function ResumeDocument() {
  return (
    <article className="resume mx-auto max-w-3xl bg-white px-7 py-9 text-[13px] leading-relaxed text-zinc-800 sm:px-10 sm:py-11 print:max-w-none print:px-0 print:py-0">
      {/* Header */}
      <header className="border-b-2 border-zinc-900 pb-4">
        <h1 className="font-display text-[28px] font-extrabold tracking-tight text-zinc-900">
          {resume.name}
        </h1>
        <p className="mt-0.5 text-[15px] font-semibold text-violet-700">
          {resume.title}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-zinc-600">
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} /> {resume.location}
          </span>
          <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-1">
            <Mail size={12} /> {resume.email}
          </a>
          <span className="inline-flex items-center gap-1">
            <Phone size={12} /> {resume.phone}
          </span>
          {resume.links.map((l) => (
            <span key={l.label} className="inline-flex items-center gap-1">
              <Globe size={12} /> {l.href}
            </span>
          ))}
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <p className="text-zinc-700">{resume.summary}</p>
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div className="grid gap-1.5">
          {resume.skills.map((s) => (
            <div key={s.group} className="grid grid-cols-[140px_1fr] gap-2">
              <span className="font-semibold text-zinc-900">{s.group}</span>
              <span className="text-zinc-700">{s.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-4">
          {resume.experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[14px] font-bold text-zinc-900">
                  {job.title} <span className="font-medium text-zinc-500">— {job.company}</span>
                </h3>
                <span className="text-[11.5px] font-medium text-zinc-500">
                  {job.period} · {job.location}
                </span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-zinc-700">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Projects */}
      <Section title="Key Projects">
        <div className="space-y-2">
          {resume.projects.map((p) => (
            <div key={p.name}>
              <span className="font-semibold text-zinc-900">{p.name}.</span>{" "}
              <span className="text-zinc-700">{p.detail}</span>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Education */}
        <Section title="Education">
          <h3 className="text-[14px] font-bold text-zinc-900">{resume.education.degree}</h3>
          <p className="text-zinc-700">{resume.education.school}</p>
          <p className="text-[11.5px] text-zinc-500">
            {resume.education.period} · {resume.education.detail}
          </p>
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <ul className="space-y-1">
            {resume.achievements.map((a) => (
              <li key={a} className="flex gap-2 text-zinc-700">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-600" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-5">
      <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-700">
        {title}
      </h2>
      {children}
    </section>
  );
}
