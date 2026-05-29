import Link from "next/link";
import { ArrowLinkIcon, ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_CTA } from "../../lib/homePageData";

export default function HomeCTA() {
  return (
    <section className="home-cta-section" aria-labelledby="home-cta-heading">
      <div className="home-wrap">
        <Reveal className="home-cta-inner">
          <div>
            <h2 id="home-cta-heading" className="home-cta-heading">
              {HOME_CTA.heading}
            </h2>
            <p className="home-cta-sub">{HOME_CTA.sub}</p>
          </div>
          <div className="home-cta-action">
            <a href={`mailto:${HOME_CTA.email}`} className="home-cta-email">
              {HOME_CTA.email}
            </a>
            <Link
              href={HOME_CTA.briefHref}
              className="home-arrow-link home-cta-brief-link"
            >
              Get in touch <ArrowLinkIcon />
            </Link>
            <Link
              href={HOME_CTA.callHref}
              target="_blank"
              rel="noopener noreferrer"
              className="home-arrow-link home-cta-call-link"
            >
              Schedule a call <ArrowLinkIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
