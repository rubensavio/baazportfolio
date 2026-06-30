import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import BookCallClient from "./BookCallClient";
import FaqJsonLd from "../../components/FaqJsonLd";
import FAQ from "../../components/FAQ/FAQ";
import "./page.scss";

const BOOK_CALL_FAQS = [
  {
    question: "What happens on the call?",
    answer:
      "You'll talk directly with the CEO of Baaz about your goals, scope, timeline, budget, and technical risks. By the end you'll have a clearer view of the right approach and next steps - whether that's a greenfield build, a rescue, or scaling an existing product.",
  },
  {
    question: "Is the call free?",
    answer:
      "Yes. The first strategy or scoping call is free and carries no obligation. It's a working session to understand your problem and assess fit.",
  },
  {
    question: "Who should book a call?",
    answer:
      "Founders, product leaders, and engineering managers planning a new product, modernising legacy software, adding AI, or needing extra delivery capacity. Baaz works with startups and enterprises across 26+ countries.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Baaz responds quickly - typically within one business day - to confirm your slot or suggest an alternative time.",
  },
];

export default function BookCall() {
  return (
    <div className="baaz-v2 book-call-v2">
      <FaqJsonLd items={BOOK_CALL_FAQS} />
      <ClientNavbar />

      <header className="book-call-hero v2-wrap">
        <p className="v2-label book-call-eyebrow">Schedule</p>
        <h1 className="booking-title v2-display">Book Your Call</h1>
        <p className="booking-subtitle">
          Book a free, no-obligation call with the CEO of Baaz to
          discuss your goals, scope, timeline, and technical risks. Pick a date
          and time that works for you below - you'll leave with a clear view of
          the right approach and next steps.
        </p>
      </header>

      <BookCallClient
        faqSection={
          <section className="v2-faq" aria-label="Booking FAQ">
            <FAQ faqs={BOOK_CALL_FAQS} heading="Questions about booking a call" />
          </section>
        }
      />
    </div>
  );
}
