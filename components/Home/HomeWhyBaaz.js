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

        {reasons.map(({ num, title, paragraphs: [lead, ...rest] }) => (
          <Reveal key={num} className="home-why-row">
            <div className="home-why-word">
              <span className="home-why-num">{num}</span>
              <h3 className="home-why-title">
                {title}
                <span className="home-accent">.</span>
              </h3>
            </div>
            <div className="home-why-body">
              <p className="home-why-lead">{lead}</p>
              {rest.map((p, i) => (
                <p key={i} className="home-why-para">{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
