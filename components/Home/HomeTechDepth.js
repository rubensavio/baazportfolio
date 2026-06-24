import Reveal from "./Reveal";
import { HOME_TECH_DEPTH } from "../../lib/homePageData";

function splitItems(items) {
  return items
    .split(/,\s*|\s+and\s+|\s+&\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function HomeTechDepth() {
  const { heading, sub, footer, categories } = HOME_TECH_DEPTH;

  return (
    <section className="home-section home-tech-section" aria-labelledby="home-tech-heading">
      <div className="home-wrap">
        <Reveal className="home-services-header">
          <h2 id="home-tech-heading">{heading}</h2>
          <p className="home-services-sub">{sub}</p>
        </Reveal>

        <div className="home-tech-stack">
          {categories.map((cat) => (
            <div key={cat.title} className="home-tech-stack-row">
              <h3 className="home-tech-stack-title">{cat.title}</h3>
              <div className="home-tech-chips">
                {splitItems(cat.items).map((tech) => (
                  <span key={tech} className="home-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="home-tech-footer">{footer}</p>
      </div>
    </section>
  );
}
