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

        <div className="home-impact-list">
          {stories.map((story) => (
            <Reveal key={story.industry} className="home-impact-story">
              <div className="home-impact-meta">
                <span className="home-impact-industry">{story.industry}</span>
                <span className="home-impact-client">{story.client}</span>
              </div>

              <p className="home-impact-para">
                <span className="home-impact-val">{story.headline.value}</span>{" "}
                {story.headline.label}.{" "}
                {story.metrics.map((m, i) => (
                  <span key={m.label}>
                    <span className="home-impact-val">{m.value}</span> {m.label}.
                    {i < story.metrics.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
