import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import ClinicDemo from "@/components/demos/ClinicDemo";

export const metadata: Metadata = {
  title: "Sample Clinic Website Demo | Zamin Abbas",
  description:
    "A sample dental clinic website design in Multan with doctors, timings, location and patient booking. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function ClinicDemoPage() {
  return (
    <>
      <DemoBanner />
      <ClinicDemo />
      <DemoCta />
    </>
  );
}
