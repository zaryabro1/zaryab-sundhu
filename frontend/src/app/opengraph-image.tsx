import { ImageResponse } from "next/og";
import { profile } from "../data/site";

/**
 * The card shown when the site is shared on social platforms or in chat.
 *
 * Generated at build time rather than committed as a binary, so it stays in
 * step with the profile data. Drawn from the same Nocturne tokens as the site,
 * but this is a share asset — it never renders inside the page and does not
 * touch the layout.
 *
 * Values are literal here: this runs through Satori, which resolves neither
 * CSS custom properties nor Tailwind classes.
 */
export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#161826",
          color: "#e9e9ed",
          fontFamily: "sans-serif",
        }}
      >
        {/* The accent as a short solid mark — the system's own signature. */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#9184d9",
            marginBottom: 44,
          }}
        />

        <div
          style={{
            fontSize: 82,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            fontSize: 36,
            color: "#9184d9",
            marginTop: 18,
            letterSpacing: "-0.02em",
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "rgba(233,233,237,0.6)",
            marginTop: 30,
            maxWidth: 880,
            lineHeight: 1.45,
          }}
        >
          Six years building scalable web applications and microservices with
          Next.js, Node.js and AWS.
        </div>
      </div>
    ),
    size
  );
}
