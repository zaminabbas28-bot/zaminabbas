import type { Metadata } from "next";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoCta from "@/components/demos/DemoCta";
import MedicalStoreDemo from "@/components/demos/MedicalStoreDemo";

export const metadata: Metadata = {
  title: "Sample Medical Store Website Demo | Zamin Abbas",
  description:
    "A sample medical store website design in Multan with medicine categories, prescription orders and home delivery. Demo only — not a real business.",
  robots: { index: false, follow: false },
};

export default function MedicalStoreDemoPage() {
  return (
    <>
      <DemoBanner />
      <MedicalStoreDemo />
      <DemoCta />
    </>
  );
}
