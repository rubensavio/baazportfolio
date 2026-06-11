import Reveal from "./Reveal";
import { HOME_TECH_DEPTH } from "../../lib/homePageData";

export default function HomeTechDepth() {
  const { heading, sub, footer, categories } = HOME_TECH_DEPTH;

  return (
    <section className="home-section home-tech-section" aria-labelledby="home-tech-heading">
      <div className="home-wrap">
        <Reveal className="home-tech-header">
          <h2 id="home-tech-heading">{heading}</h2>
          <p className="home-tech-sub">{sub}</p>
        </Reveal>

        <div className="home-tech-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="home-tech-cell">
              <h3 className="home-tech-cat-title">{cat.title}</h3>
              <p className="home-tech-cat-items">{cat.items}</p>
            </div>
          ))}
        </div>

        <p className="home-tech-footer">{footer}</p>
      </div>
    </section>
  );
}
