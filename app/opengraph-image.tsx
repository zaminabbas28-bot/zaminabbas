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
          background: "#050914",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* violet glow accents */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 380,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.28)",
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
            background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 32,
          }}
        >
          ZA
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "#e8eefb",
            letterSpacing: -2,
          }}
        >
          Zamin Abbas
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: "#22d3ee",
            marginTop: 16,
            letterSpacing: 4,
          }}
        >
          LOCAL SEO EXPERT
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#9aa8c3",
            marginTop: 24,
          }}
        >
          Local SEO Expert in Multan, Pakistan
        </div>
      </div>
    ),
    { ...size }
  );
}
