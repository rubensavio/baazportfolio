import Link from "next/link";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_INDUSTRIES } from "../../lib/homePageData";

export default function HomeIndustriesBento() {
  return (
    <section className="home-section" aria-labelledby="home-ind-heading">
      <div className="home-wrap">
        <Reveal className="home-work-header">
          <h2 id="home-ind-heading">Industries we serve</h2>
          <span className="home-label">{HOME_INDUSTRIES.length} verticals</span>
        </Reveal>

        {HOME_INDUSTRIES.map((item) => {
          const inner = (
            <>
              <span className="home-wi-num">{item.num}</span>
              <div className="home-wi-body">
                <div className="home-wi-title">{item.title}</div>
                <div className="home-wi-meta">
                  {item.tags.split(", ").map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {item.href && <ArrowUpRightIcon className="home-wi-arrow" />}
            </>
          );

          return item.href ? (
            <Link key={item.num} href={item.href} className="home-work-item">
              {inner}
            </Link>
          ) : (
            <div key={item.num} className="home-work-item" style={{ cursor: "default" }}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
