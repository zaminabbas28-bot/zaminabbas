import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import RestaurantDemo from "@/components/demos/RestaurantDemo";

export const metadata: Metadata = {
  title: "Sample Restaurant Website Demo | Zamin Abbas",
  description:
    "A sample restaurant website design in Multan with menu, online ordering and table booking. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function RestaurantDemoPage() {
  return (
    <>
      <DemoBanner />
      <RestaurantDemo />
      <DemoCta />
    </>
  );
}
