"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Self-serve photo slot.
 *
 * Looks for `/images/<name>.jpg` (then .jpeg, .png, .webp). If no file is
 * found, renders the `fallback` instead — so the page looks complete with or
 * without photos. To add a photo later, just drop it into `public/images/`
 * with the right file name; no code changes needed.
 */
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"] as const;

type SitePhotoProps = {
  /** Base file name, e.g. "hero" -> /images/hero.jpg */
  name: string;
  alt: string;
  /** Shown while no photo file exists. */
  fallback: React.ReactNode;
  /** Extra classes for the <Image> (e.g. "object-cover"). */
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SitePhoto({
  name,
  alt,
  fallback,
  imgClassName = "object-cover",
  priority = false,
  sizes,
}: SitePhotoProps) {
  const [extIndex, setExtIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={`/images/${name}.${EXTENSIONS[extIndex]}`}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={imgClassName}
      onError={() => {
        if (extIndex + 1 < EXTENSIONS.length) setExtIndex(extIndex + 1);
        else setFailed(true);
      }}
    />
  );
}
