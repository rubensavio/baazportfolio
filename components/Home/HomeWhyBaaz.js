import Reveal from "./Reveal";
import { HOME_WHY_BAAZ } from "../../lib/homePageData";

export default function HomeWhyBaaz() {
  const { heading, sub, reasons } = HOME_WHY_BAAZ;

  return (
    <section className="home-section" aria-labelledby="home-why-heading">
      <div className="home-wrap">
        <Reveal className="home-why-header">
          <h2 id="home-why-heading">{heading}</h2>
          <p className="home-why-sub">{sub}</p>
        </Reveal>

        <div className="home-why-grid">
          {reasons.map((r) => (
            <div key={r.num} className="home-why-card">
              <span className="home-why-num">{r.num}</span>
              <h3 className="home-why-title">{r.title}</h3>
              {r.paragraphs.map((p, i) => (
                <p key={i} className="home-why-para">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
