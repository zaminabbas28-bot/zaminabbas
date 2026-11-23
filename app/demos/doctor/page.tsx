import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import DoctorDemo from "@/components/demos/DoctorDemo";

export const metadata: Metadata = {
  title: "Sample Doctor Portfolio Website Demo | Zamin Abbas",
  description:
    "A sample doctor portfolio website design in Multan with qualifications, services, patient reviews and appointment booking. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function DoctorDemoPage() {
  return (
    <>
      <DemoBanner />
      <DoctorDemo />
      <DemoCta />
    </>
  );
}
