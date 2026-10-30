import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import SalonDemo from "@/components/demos/SalonDemo";

export const metadata: Metadata = {
  title: "Sample Salon Website Demo | Zamin Abbas",
  description:
    "A sample salon website design in Multan with services, prices, stylists and appointment booking. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function SalonDemoPage() {
  return (
    <>
      <DemoBanner />
      <SalonDemo />
      <DemoCta />
    </>
  );
}
