import Reveal from "./Reveal";
import { HOME_IMPACT } from "../../lib/homePageData";

export default function HomeImpact() {
  const { heading, sub, stories } = HOME_IMPACT;

  return (
    <section className="home-section home-impact-section" aria-labelledby="home-impact-heading">
      <div className="home-wrap">
        <Reveal className="home-impact-header">
          <h2 id="home-impact-heading">{heading}</h2>
          <p className="home-impact-sub">{sub}</p>
        </Reveal>

        <div className="home-impact-grid">
          {stories.map((story) => (
            <div key={story.industry} className="home-impact-card">
              <div className="home-impact-top">
                <span className="home-impact-industry">{story.industry}</span>
                <span className="home-impact-client">{story.client}</span>
              </div>

              <div className="home-impact-hero">
                <span className="home-impact-hero-value">{story.headline.value}</span>
                <span className="home-impact-hero-label">{story.headline.label}</span>
              </div>

              <ul className="home-impact-metrics">
                {story.metrics.map((m) => (
                  <li key={m.label} className="home-impact-metric">
                    <span className="home-impact-metric-value">{m.value}</span>
                    <span className="home-impact-metric-label">{m.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
