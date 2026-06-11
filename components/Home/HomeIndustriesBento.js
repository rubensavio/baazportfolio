import Link from "next/link";
import Reveal from "./Reveal";
import { HOME_INDUSTRIES } from "../../lib/homePageData";

const SIZES = ["large", "small", "small", "large", "large", "small"];

export default function HomeIndustriesBento() {
  return (
    <section className="home-section home-ind-bento-section" aria-labelledby="home-ind-bento-heading">
      <div className="home-wrap">
        <Reveal className="home-industries-header">
          <h2 id="home-ind-bento-heading">Industries we serve</h2>
          <p className="home-industries-sub">Deep domain knowledge across verticals</p>
        </Reveal>

        <div className="home-ind-bento-grid">
          {HOME_INDUSTRIES.map((item, i) => {
            const size = SIZES[i] || "small";
            const inner = (
              <>
                <span className="home-ind-bento-num">{item.num}</span>
                <h3 className="home-ind-bento-title">{item.title}</h3>
                <p className="home-ind-bento-desc">{item.description}</p>
                <p className="home-ind-bento-tags">{item.tags}</p>
              </>
            );

            const cls = `home-ind-bento-card home-ind-bento-card--${size}`;

            return item.href ? (
              <Link key={item.num} href={item.href} className={`${cls} home-ind-bento-card--link`}>
                {inner}
              </Link>
            ) : (
              <div key={item.num} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
