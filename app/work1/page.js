import CaseStudyPageClient from "../../components/CaseStudyPageClient/CaseStudyPageClient";
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
import {
  WORK1_CASE_STUDY_FAQ_HEADING,
  WORK1_CASE_STUDY_FAQ_ITEMS,
} from "../../lib/caseStudyPageFaqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WORK1_CASE_STUDY_FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Work1() {
  return (
    <CaseStudyPageClient
      className="work1"
      faqs={WORK1_CASE_STUDY_FAQ_ITEMS}
      faqHeading={WORK1_CASE_STUDY_FAQ_HEADING}
      faqSchema={faqSchema}
    >
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
    </CaseStudyPageClient>
  );
}
