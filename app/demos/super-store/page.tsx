import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import SuperStoreDemo from "@/components/demos/SuperStoreDemo";

export const metadata: Metadata = {
  title: "Sample Super Store Website Demo | Zamin Abbas",
  description:
    "A sample super store website design in Multan with grocery categories, weekly offers and home delivery. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function SuperStoreDemoPage() {
  return (
    <>
      <DemoBanner />
      <SuperStoreDemo />
      <DemoCta />
    </>
  );
}
