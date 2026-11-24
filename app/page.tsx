import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import { PageIntro } from "@/components/page-intro";
import { Hero } from "@/components/sections/hero";
import { WhyFE } from "@/components/sections/why-fe";
import { TerminalStrip } from "@/components/terminal-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { AiWorkflow } from "@/components/sections/ai-workflow";
import { Contact } from "@/components/sections/contact";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <PageIntro />
      <CursorGlow />
      <Nav />
      <main id="main">
        <Hero />
        <WhyFE />
        <TerminalStrip />
        <Manifesto />
        <Projects />
        <Experience />
        <Skills />
        <AiWorkflow />
        <Contact />
      </main>
      <Footer />
      <PersonSchema />
    </>
  );
}

/** JSON-LD structured data for SEO / rich results. */
function PersonSchema() {
  const personId = `${site.domain}/#person`;
  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: site.role,
    description: site.seoDescription,
    email: site.email,
    url: site.domain,
    image: `${site.domain}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [site.socials.linkedin, site.socials.github],
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Video Streaming",
      "HLS",
      "Web Performance",
      "Frontend Architecture",
      "AI-Assisted Development",
    ],
    worksFor: { "@type": "Organization", name: "Logicwind" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "CGPIT, Uka Tarsadia University" },
    hasOccupation: {
      "@type": "Occupation",
      name: site.role,
      skills: projects.flatMap((p) => p.stack).join(", "),
    },
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${site.domain}/#website`,
        url: site.domain,
        name: `${site.name} — Portfolio`,
        description: site.seoDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.domain}/#profile`,
        url: site.domain,
        name: `${site.name} — ${site.role}`,
        isPartOf: { "@id": `${site.domain}/#website` },
        mainEntity: { "@id": personId },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
