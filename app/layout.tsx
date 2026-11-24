import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteBackdrop } from "@/components/site-backdrop";
import { site } from "@/content/site";

// Self-hosted (latin, variable) so the build never depends on fetching Google Fonts.
const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const sora = localFont({
  src: "./fonts/Sora-latin.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 800",
});

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-latin.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.seoDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  category: "technology",
  keywords: [
    "Senior Frontend Engineer",
    "Senior React Developer",
    "Senior JavaScript Developer",
    "Next.js Developer",
    "TypeScript",
    "Video Streaming",
    "HLS",
    "GraphQL",
    "Apollo Client",
    "AI-Assisted Development",
    "Claude Code",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${site.name} — ${site.role}`,
    description: site.seoDescription,
    url: site.domain,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          <SiteBackdrop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
