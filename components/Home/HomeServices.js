import Link from "next/link";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_SERVICES } from "../../lib/homePageData";

export default function HomeServices() {
  return (
    <section className="home-section" aria-labelledby="home-services-heading">
      <div className="home-wrap">
        <div className="home-svc-layout">
          <Reveal className="home-svc-aside">
            <h2 id="home-services-heading">What we do</h2>
            <p className="home-svc-aside-sub">
              End-to-end capability. <br /> One accountable partner.
            </p>
          </Reveal>

          <div className="home-svc-list">
            {HOME_SERVICES.map((service) => (
              <Reveal
                key={service.num}
                as={Link}
                href={service.href}
                className="home-svc-entry home-svc-entry--link"
              >
                <span className="home-svc-entry-num">{service.num}</span>
                <div>
                  <h3 className="home-svc-entry-title">
                    {service.title}
                    <ArrowUpRightIcon className="home-ind-entry-arrow" />
                  </h3>
                  <p className="home-svc-entry-desc">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
