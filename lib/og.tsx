import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

/** Shared link-preview card used by opengraph-image and twitter-image. */
export function renderOgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 80px",
        background: "#08080a",
        backgroundImage:
          "radial-gradient(circle at 18% 18%, #6d28d955, transparent 45%), radial-gradient(circle at 88% 85%, #2563eb44, transparent 45%)",
        color: "#f4f4f5",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 26,
          color: "#a78bfa",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 999, background: "#a78bfa" }} />
        {`${site.yearsExperience} years of experience`}
      </div>
      <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.02, marginTop: 28 }}>
        {site.name}
      </div>
      <div style={{ fontSize: 44, fontWeight: 700, color: "#e4e4e7", marginTop: 18 }}>
        {site.role}
      </div>
      <div
        style={{ fontSize: 30, color: "#a1a1aa", marginTop: 26, maxWidth: 980, lineHeight: 1.4 }}
      >
        {site.ogLine}
      </div>
      <div style={{ display: "flex", gap: 22, marginTop: 44, fontSize: 26, color: "#8b8b95" }}>
        <span>JavaScript</span>
        <span>·</span>
        <span>React</span>
        <span>·</span>
        <span>Next.js</span>
        <span>·</span>
        <span>AI-Assisted Development</span>
      </div>
      <div style={{ position: "absolute", right: 80, bottom: 56, fontSize: 24, color: "#71717a" }}>
        {site.domain.replace("https://", "")}
      </div>
    </div>,
    { ...ogSize },
  );
}
