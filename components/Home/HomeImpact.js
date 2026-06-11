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
            <div key={story.industry} className="home-impact-card">
              <h3 className="home-impact-industry">
                {story.industry} <span className="home-impact-client">|&nbsp; {story.client}</span>
              </h3>
              <p className="home-impact-result">{story.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
