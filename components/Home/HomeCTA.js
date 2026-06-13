import Link from "next/link";
import Reveal from "./Reveal";
import { HOME_CTA } from "../../lib/homePageData";

export default function HomeCTA() {
  const { heading, leftLines, briefHref, callHref } = HOME_CTA;

  return (
    <section className="home-cta-section" aria-labelledby="home-cta-heading">
      <div className="home-wrap">
        <Reveal className="home-cta-panel">
          <span className="home-cta-eyebrow">Start a project</span>
          <h2 id="home-cta-heading" className="home-cta-heading">
            {heading}
          </h2>
          <p className="home-cta-pitch">{leftLines.join(" ")}</p>
          <div className="home-cta-actions">
            <Link href={briefHref} className="home-cta-btn home-cta-btn--primary">
              Get in touch
            </Link>
            <Link href={callHref} className="home-cta-btn home-cta-btn--outline">
              Schedule a call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
