import Reveal from "./Reveal";
import BookCallWidget from "../BookCallWidget/BookCallWidget";
import { HOME_CTA } from "../../lib/homePageData";
import "./HomeCTA.scss";

export default function HomeCTA() {
  const { heading, leftLines } = HOME_CTA;

  return (
    <section className="home-cta-section" aria-labelledby="home-cta-heading">
      <div className="home-cta-wrap">
        <Reveal className="home-cta-panel">
          <h2 id="home-cta-heading" className="home-cta-heading">
            {heading}
          </h2>
          <p className="home-cta-pitch">{leftLines.join(" ")}</p>
          <div className="home-cta-booking">
            <BookCallWidget />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
