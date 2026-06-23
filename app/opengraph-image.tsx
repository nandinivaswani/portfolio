import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #6d28d955, transparent 45%), radial-gradient(circle at 85% 80%, #2563eb44, transparent 45%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#a78bfa",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#a78bfa",
            }}
          />
          {site.specialism}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 24,
            maxWidth: 980,
          }}
        >
          {`${site.name} — ${site.role}`}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 48,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>Video / HLS</span>
          <span>·</span>
          <span>GraphQL</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
