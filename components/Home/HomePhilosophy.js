import Reveal from "./Reveal";
import { HOME_PHILOSOPHY } from "../../lib/homePageData";
import "./HomePhilosophy.scss";

export default function HomePhilosophy() {
  const { label, heading, paragraphs } = HOME_PHILOSOPHY;

  return (
    <section className="home-philosophy" aria-labelledby="home-philosophy-heading">
      <div className="home-wrap">
        <Reveal className="home-philosophy-inner">
          <div className="home-philosophy-aside">
            <span className="home-philosophy-label">
              <span className="home-philosophy-label-dot" aria-hidden="true" />
              {label}
            </span>
            <h2 id="home-philosophy-heading" className="home-philosophy-heading">
              {heading}
            </h2>
          </div>
          <div className="home-philosophy-body">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
