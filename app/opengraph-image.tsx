import { ImageResponse } from "next/og";

export const alt = "Zamin Abbas — Local SEO Expert in Multan, Pakistan";
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          justifyContent: "center",
          background: "#070b18",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* gold glow accents */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 380,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "rgba(245, 158, 11, 0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 130,
            height: 130,
            borderRadius: 32,
            background: "linear-gradient(135deg, #ffd97a, #f59e0b)",
            fontSize: 56,
            fontWeight: 800,
            color: "#070b18",
            marginBottom: 32,
          }}
        >
          ZA
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          Zamin Abbas
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: "#fbbf24",
            marginTop: 16,
            letterSpacing: 4,
          }}
        >
          TOP RANKED SEO SPECIALIST
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#8b94b3",
            marginTop: 24,
          }}
        >
          500+ Websites Ranked · 10+ Years Experience · zaminabbas.me
        </div>
      </div>
    ),
    { ...size }
  );
}
