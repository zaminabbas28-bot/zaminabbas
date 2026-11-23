import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import SoftwareDemo from "@/components/demos/SoftwareDemo";

export const metadata: Metadata = {
  title: "Sample Software Services Website Demo | Zamin Abbas",
  description:
    "A sample software services website design in Multan with web apps, mobile apps, APIs and a get-a-quote form. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function SoftwareDemoPage() {
  return (
    <>
      <DemoBanner />
      <SoftwareDemo />
      <DemoCta />
    </>
  );
}
