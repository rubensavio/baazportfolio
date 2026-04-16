import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import CaseStudyHero from "../../components/CaseStudyHero/CaseStudyHero";
import SolutionSection from "../../components/SolutionSection/SolutionSection";
import ImplementationJourney from "../../components/ImplementationJourney/ImplementationJourney";
import ResultsSection from "../../components/ResultsSection/ResultsSection";
import UnexpectedWins from "../../components/UnexpectedWins/UnexpectedWins";
import RealWorldImpact from "../../components/RealWorldImpact/RealWorldImpact";
import ChallengesLessons from "../../components/ChallengesLessons/ChallengesLessons";
import IndustryComparison from "../../components/IndustryComparison/IndustryComparison";
import BottomLine from "../../components/BottomLine/BottomLine";
import FinalThoughts from "../../components/FinalThoughts/FinalThoughts";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

export default function Work1() {
  return (
    <div className="work1">
      <ClientNavbar />
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
