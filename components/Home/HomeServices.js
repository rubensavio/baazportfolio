import Reveal from "./Reveal";
import { HOME_SERVICES } from "../../lib/homePageData";

export default function HomeServices() {
  return (
    <section className="home-section" aria-labelledby="home-services-heading">
      <div className="home-wrap">
        <Reveal className="home-services-header">
          <h2 id="home-services-heading">What we do</h2>
          <p className="home-services-sub">End-to-end capability. One accountable partner.</p>
        </Reveal>

        <div className="home-svc-grid">
          {HOME_SERVICES.map((service) => (
            <div key={service.num} className="home-svc-card">
              <span className="home-svc-num">{service.num}</span>
              <h3 className="home-svc-name">{service.title}</h3>
              <p className="home-svc-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
