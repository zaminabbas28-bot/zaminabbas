"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// SmokeCanvas is a continuous canvas animation. Running it during page load
// costs main-thread time on phones, which hurts mobile PageSpeed (TBT).
// So it only mounts after the browser is idle, only on desktop-width
// viewports, and never on save-data / very slow connections. Desktop keeps
// the same visual; mobile keeps the video + gold glows instead.
const SmokeCanvas = dynamic(() => import("./SmokeCanvas"), { ssr: false });

export default function SmokeLazy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const conn =
      (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
        .connection;
    if (conn && (conn.saveData || conn.effectiveType === "slow-2g" || conn.effectiveType === "2g")) {
      return;
    }
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback(() => setShow(true), { timeout: 2000 });
    } else {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;
  return <SmokeCanvas />;
}
