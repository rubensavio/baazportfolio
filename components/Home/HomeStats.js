import Reveal from "./Reveal";
import { HOME_STATS_DEEP } from "../../lib/homePageData";

export default function HomeStats() {
  return (
    <div className="home-stats-section">
      <div className="home-stats-grid">
        {HOME_STATS_DEEP.map((stat, index) => (
          <Reveal
            key={stat.label}
            className={`home-stat-item${index ? ` reveal-delay-${index}` : ""}`}
          >
            <span className="home-stat-num">
              {stat.value}
              <span className="home-accent">{stat.suffix}</span>
            </span>
            <span className="home-stat-label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
