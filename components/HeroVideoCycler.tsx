"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hero video cycler (approved design): three portrait clips auto-change
 * every 1 second; tapping a thumbnail jumps to that clip and restarts
 * the cycle. Posters are the site's existing photos (videos decode at
 * build time from public/videos/*.mp4.b64).
 */
const VIDEOS = [
  {
    src: "/videos/hero-video-navy.mp4",
    poster: "/images/zamin-abbas-local-seo-expert.jpg",
    alt: "Rana Zamin — navy suit clip",
    label: "Navy suit",
  },
  {
    src: "/videos/hero-video-gray-side.mp4",
    poster: "/images/rana-2.jpg",
    alt: "Rana Zamin — gray suit, side view clip",
    label: "Gray suit, side view",
  },
  {
    src: "/videos/hero-video-gray-front.mp4",
    poster: "/images/rana-3.jpg",
    alt: "Rana Zamin — gray suit, facing the camera clip",
    label: "Gray suit, front view",
  },
];

export default function HeroVideoCycler() {
  const [active, setActive] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeRef = useRef(0);
  const reducedMotion = useRef(false);

  const showVideo = useCallback((i: number) => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === i) {
        try {
          v.currentTime = 0;
          const p = v.play();
          if (p) p.catch(() => {});
        } catch {
          /* playback unavailable */
        }
      } else {
        v.pause();
      }
    });
    activeRef.current = i;
    setActive(i);
  }, []);

  // Start the first clip once mounted.
  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    showVideo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-change every 1 second; pause while the tab is hidden.
  useEffect(() => {
    if (reducedMotion.current) return undefined;
    const id = setInterval(() => {
      if (document.hidden) return;
      const next = (activeRef.current + 1) % VIDEOS.length;
      showVideo(next);
    }, 1000);
    return () => clearInterval(id);
  }, [cycleKey, showVideo]);

  const jumpTo = (i: number) => {
    showVideo(i);
    setCycleKey((k) => k + 1); // restart the 1-second cycle
  };

  return (
    <div className="hero-media">
      <div className="hero-video-card">
        {VIDEOS.map((v, i) => (
          <video
            key={v.src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            className={i === active ? "active" : ""}
            src={v.src}
            poster={v.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={v.alt}
          />
        ))}
        <span className="video-chip">{VIDEOS[active].label}</span>
      </div>

      <div className="hero-thumbs" role="tablist" aria-label="Choose hero video">
        {VIDEOS.map((v, i) => (
          <button
            key={v.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show ${v.label} video`}
            className={`hero-thumb${i === active ? " active" : ""}`}
            onClick={() => jumpTo(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.poster} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
