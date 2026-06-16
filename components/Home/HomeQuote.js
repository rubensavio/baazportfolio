import Reveal from "./Reveal";
import { HOME_QUOTE } from "../../lib/homePageData";

export default function HomeQuote() {
  return (
    <section className="home-quote-section" aria-label="Client testimonial">
      <div className="home-wrap">
        <Reveal className="home-quote-inner">
          <span className="home-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="home-quote-text">{HOME_QUOTE.text}</p>
          <span className="home-label">- {HOME_QUOTE.attr}</span>
        </Reveal>
      </div>
    </section>
  );
}
