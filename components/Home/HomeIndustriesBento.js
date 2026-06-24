import Link from "next/link";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_INDUSTRIES } from "../../lib/homePageData";

export default function HomeIndustriesBento() {
  return (
    <section className="home-section" aria-labelledby="home-ind-heading">
      <div className="home-wrap">
        <div className="home-svc-layout">
          <Reveal className="home-svc-aside">
            <h2 id="home-ind-heading">Industries we serve</h2>
            <p className="home-svc-aside-sub">Deep domain knowledge across verticals.</p>
          </Reveal>

          <div className="home-svc-list">
            {HOME_INDUSTRIES.map((item) => {
              const inner = (
                <>
                  <span className="home-svc-entry-num">{item.num}</span>
                  <div>
                    <h3 className="home-svc-entry-title">
                      {item.title}
                      {item.href && <ArrowUpRightIcon className="home-ind-entry-arrow" />}
                    </h3>
                    <p className="home-svc-entry-desc">{item.description}</p>
                    <p className="home-ind-entry-tags">{item.tags}</p>
                  </div>
                </>
              );

              return item.href ? (
                <Reveal key={item.num} as={Link} href={item.href} className="home-svc-entry home-svc-entry--link">
                  {inner}
                </Reveal>
              ) : (
                <Reveal key={item.num} className="home-svc-entry">
                  {inner}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
