"use client";

import React from "react";
import dynamic from "next/dynamic";
import CaseStudyHero from "../../components/CaseStudyHero/CaseStudyHero";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const SolutionSection = dynamic(
  () => import("../../components/SolutionSection/SolutionSection"),
  { ssr: false }
);
const ImplementationJourney = dynamic(
  () => import("../../components/ImplementationJourney/ImplementationJourney"),
  { ssr: false }
);
const ResultsSection = dynamic(
  () => import("../../components/ResultsSection/ResultsSection"),
  { ssr: false }
);
const UnexpectedWins = dynamic(
  () => import("../../components/UnexpectedWins/UnexpectedWins"),
  { ssr: false }
);
const RealWorldImpact = dynamic(
  () => import("../../components/RealWorldImpact/RealWorldImpact"),
  { ssr: false }
);
const ChallengesLessons = dynamic(
  () => import("../../components/ChallengesLessons/ChallengesLessons"),
  { ssr: false }
);
const IndustryComparison = dynamic(
  () => import("../../components/IndustryComparison/IndustryComparison"),
  { ssr: false }
);
const BottomLine = dynamic(
  () => import("../../components/BottomLine/BottomLine"),
  { ssr: false }
);
const FinalThoughts = dynamic(
  () => import("../../components/FinalThoughts/FinalThoughts"),
  { ssr: false }
);
const CTA = dynamic(() => import("../../components/CTA/CTA"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function Work1() {
  return (
    <div className="work1">
      <Headroom>
        <Navbar />
      </Headroom>
      <CaseStudyHero />
      <SolutionSection />
      <ImplementationJourney />
      <ResultsSection />
      <UnexpectedWins />
      <RealWorldImpact />
      <ChallengesLessons />
      <IndustryComparison />
      <BottomLine />
      <FinalThoughts />
    </div>
  );
}
