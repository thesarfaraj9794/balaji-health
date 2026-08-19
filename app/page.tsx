import CallToActionSection from "@/components/CallToAction";
import FAQSection from "@/components/FAQSection";
import HealthShowcase from "@/components/HealthShowcase";

import HomeReset from "@/components/HomeReset";
import Hero from "@/components/Hero";

import PlatformFeatures from "@/components/PlatformFeatures";

import WellnessHighlight from "@/components/WellnessHighlight";

import AdvantageComparison from "@/components/WhyChooseTable";
import HealthcareComparison from "@/components/WorkModel";
import React from "react";

const page = () => {
  return (
    <div id="home" className="restore-theme">
      <HomeReset />
      <Hero />
      <PlatformFeatures />
      <HealthcareComparison />
      <PlatformFeatures />
      <AdvantageComparison />
      <FAQSection />
      <WellnessHighlight />
      <CallToActionSection />
    </div>
  );
};

export default page;
