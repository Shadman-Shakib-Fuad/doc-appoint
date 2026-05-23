import HeroSection from "@/components/home/HeroSection";

import DoctorsSection from "@/components/home/DoctorsSection";

import WhyChooseUs from "@/components/home/WhyChooseUs";

import BreakingNews from "@/components/home/BreakingNews";

export default function Home() {
  return (
    <>
      <HeroSection />

      <BreakingNews />

      <DoctorsSection />

      <WhyChooseUs />
    </>
  );
}