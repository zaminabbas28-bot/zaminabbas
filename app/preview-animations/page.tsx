"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_PHOTOS } from "@/lib/site";
import type { CSSProperties } from "react";

const OPTIONS = [
  {
    id: 1,
    name: "Float",
    nameUrdu: "halka upar-neeche",
    animClass: "animate-floaty",
    desc: "Abhi wali — naram upar-neeche",
  },
  {
    id: 2,
    name: "Zoom",
    nameUrdu: "slow zoom in-out",
    animClass: "anim-zoom",
    desc: "Ahista zoom in, phir zoom out",
  },
  {
    id: 3,
    name: "Wave",
    nameUrdu: "leher jaisa",
    animClass: "anim-wave",
    desc: "Ek ke baad ek — leher ki tarah",
  },
  {
    id: 4,
    name: "Marquee",
    nameUrdu: "chalti line",
    animClass: "",
    desc: "Photos ki line chalti rehti hai",
    marquee: true,
  },
  {
    id: 5,
    name: "Sway",
    nameUrdu: "jhoolna",
    animClass: "anim-sway",
    desc: "Halka jhukna + hilna",
  },
  {
    id: 6,
    name: "Pulse",
    nameUrdu: "dhadkan",
    animClass: "anim-pulse",
    desc: "Zoom + orange glow ki dhadkan",
  },
];

function PhotoRow({ animClass, stagger }: { animClass: string; stagger?: boolean }) {
  return (
    <div className="relative flex h-40 items-center sm:h-48">
      {HERO_PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className={`photo-tilt absolute overflow-hidden rounded-2xl ${animClass}`}
          style={
            {
              left: `${i * 24}%`,
              width: "34%",
              aspectRatio: "1 / 1",
              zIndex: HERO_PHOTOS.length - i,
              animationDelay: stagger ? `${i * 0.45}s` : `${i * 0.7}s`,
              "--float-rotate": photo.rotate,
            } as CSSProperties
          }
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="220px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function MarqueeRow() {
  const doubled = [...HERO_PHOTOS, ...HERO_PHOTOS];
  return (
    <div className="overflow-hidden">
      <div className="anim-marquee flex w-max gap-5">
        {doubled.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="photo-tilt relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl sm:h-44 sm:w-44"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnimationsDemo() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-28 sm:px-8">
      <Link href="/" className="text-sm font-medium text-accent hover:text-accent-deep">
        ← Back to home
      </Link>
      <h1 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
        Photo <em className="text-gradient-accent">animations</em>
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-body">
        Neeche 6 options hain — har ek me wahi 4 photos mukhtalif style se hil
        rahi hain. Jo number pasand aaye, mujhe bata do, main use hero me laga
        dunga.
      </p>

      <div className="mt-12 space-y-14">
        {OPTIONS.map((opt) => (
          <section
            key={opt.id}
            className="card-surface overflow-hidden p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-white">
                {opt.id}
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">
                  {opt.name}{" "}
                  <span className="text-base text-muted">({opt.nameUrdu})</span>
                </h2>
                <p className="text-sm text-muted">{opt.desc}</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-cream p-6">
              {opt.marquee ? (
                <MarqueeRow />
              ) : (
                <PhotoRow animClass={opt.animClass} stagger={opt.id === 3} />
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-center text-body">
        Pasand aaya? Mujhe <strong className="text-ink">number</strong> bata do —
        jaise "3 wala lagao".
      </p>
    </main>
  );
}
