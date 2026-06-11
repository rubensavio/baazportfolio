import Link from "next/link";
import Reveal from "./Reveal";
import { HOME_MID_CTA } from "../../lib/homePageData";

export default function HomeMidCTA() {
  const { line, sub, button } = HOME_MID_CTA;

  return (
    <section className="home-mid-cta" aria-label="Book a call">
      <div className="home-wrap">
        <Reveal className="home-mid-cta-inner">
          <div>
            <p className="home-mid-cta-line">{line}</p>
            <p className="home-mid-cta-sub">{sub}</p>
          </div>
          <Link href={button.href} className="home-cta-btn home-cta-btn--primary">
            {button.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
