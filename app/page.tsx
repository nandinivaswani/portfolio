import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { PageIntro } from "@/components/page-intro";
import { Hero } from "@/components/sections/hero";
import { WhyFE } from "@/components/sections/why-fe";
import { TerminalStrip } from "@/components/terminal-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <PageIntro />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <WhyFE />
        <TerminalStrip />
        <Manifesto />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <PersonSchema />
    </>
  );
}

/** JSON-LD structured data for SEO / rich results. */
function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.shortBio,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" },
    url: site.domain,
    sameAs: [site.socials.linkedin, site.socials.github],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Video Streaming",
      "HLS",
      "GraphQL",
      "Frontend Architecture",
    ],
    worksFor: { "@type": "Organization", name: "Logicwind" },
    hasOccupation: {
      "@type": "Occupation",
      name: site.role,
      skills: projects.flatMap((p) => p.stack).join(", "),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
