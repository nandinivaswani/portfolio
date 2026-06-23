import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Brands } from "@/components/sections/brands";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { MoreProjects } from "@/components/sections/more-projects";
import { Metrics } from "@/components/sections/metrics";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Highlights } from "@/components/sections/highlights";
import { Contact } from "@/components/sections/contact";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Brands />
        <About />
        <Projects />
        <MoreProjects />
        <Metrics />
        <Experience />
        <Skills />
        <Highlights />
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
