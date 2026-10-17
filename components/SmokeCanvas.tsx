"use client";

import { useEffect, useRef } from "react";

/**
 * Animated colorful smoke drifting across the hero background
 * (purple / green / pink / teal wisps, like drifting stage smoke).
 *
 * Canvas 2D particle system: soft radial-gradient puffs, additive
 * blending, slow rise + sine wobble, fade in/out life cycle.
 * Pauses when the tab is hidden or the hero is off-screen, and
 * respects prefers-reduced-motion (renders one static frame).
 */

const PALETTE: Array<[number, number, number]> = [
  [168, 85, 247], // purple
  [139, 92, 246], // violet
  [236, 72, 153], // pink
  [244, 114, 182], // light pink
  [34, 197, 94], // green
  [74, 222, 128], // light green
  [45, 212, 191], // teal
  [59, 130, 246], // blue
  [216, 180, 96], // gold accent (brand tie-in)
];

type Puff = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  wobbleAmp: number;
  wobbleFreq: number;
  phase: number;
  life: number; // 0..1 progress through life cycle
  lifeSpeed: number;
  maxAlpha: number;
  color: [number, number, number];
};

export default function SmokeCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(64, Math.max(28, Math.floor((w * h) / 26000)));

    const spawn = (initial: boolean): Puff => {
      const color = PALETTE[(Math.random() * PALETTE.length) | 0];
      return {
        x: Math.random() * w,
        // start lower so smoke drifts upward like stage smoke
        y: initial ? Math.random() * h : h + 120,
        r: 130 + Math.random() * 260,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.12 + Math.random() * 0.3),
        wobbleAmp: 20 + Math.random() * 50,
        wobbleFreq: 0.0004 + Math.random() * 0.0009,
        phase: Math.random() * Math.PI * 2,
        life: initial ? Math.random() : 0,
        lifeSpeed: 0.0009 + Math.random() * 0.0016,
        maxAlpha: 0.05 + Math.random() * 0.075,
        color,
      };
    };

    let puffs: Puff[] = Array.from({ length: count }, () => spawn(true));

    // Pre-render one soft radial sprite per palette color for performance.
    const sprites = new Map<string, HTMLCanvasElement>();
    const spriteFor = (c: [number, number, number]) => {
      const key = c.join(",");
      let s = sprites.get(key);
      if (s) return s;
      s = document.createElement("canvas");
      s.width = s.height = 256;
      const g = s.getContext("2d");
      if (g) {
        const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
        grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.85)`);
        grad.addColorStop(0.45, `rgba(${c[0]},${c[1]},${c[2]},0.38)`);
        grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
        g.fillStyle = grad;
        g.fillRect(0, 0, 256, 256);
      }
      sprites.set(key, s);
      return s;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of puffs) {
        // ease alpha in/out over the life cycle
        const a =
          p.maxAlpha *
          Math.sin(Math.min(1, Math.max(0, p.life)) * Math.PI);
        if (a <= 0.001) continue;
        const wx = p.x + Math.sin(t * p.wobbleFreq + p.phase) * p.wobbleAmp;
        ctx.globalAlpha = a;
        const s = spriteFor(p.color);
        ctx.drawImage(s, wx - p.r, p.y - p.r, p.r * 2, p.r * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const step = (t: number) => {
      if (!running || !visible) return;
      for (let i = 0; i < puffs.length; i++) {
        const p = puffs[i];
        p.life += p.lifeSpeed * 16.7;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life >= 1 || p.y < -p.r) puffs[i] = spawn(false);
      }
      draw(t);
      raf = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running && visible && !reducedMotion) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && running && !reducedMotion) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    if (reducedMotion) {
      // One static frame: no animation.
      draw(1200);
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
