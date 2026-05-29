import Link from "next/link";
import { ArrowLinkIcon, ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_SERVICES } from "../../lib/homePageData";

export default function HomeServices() {
  return (
    <section className="home-section" aria-labelledby="home-services-heading">
      <div className="home-wrap">
        <Reveal className="home-services-header">
          <h2 id="home-services-heading">What we do</h2>
          <Link href="/services" className="home-arrow-link">
            All services <ArrowLinkIcon />
          </Link>
        </Reveal>

        {HOME_SERVICES.map((service) => (
          <Link key={service.href} href={service.href} className="home-svc-row">
            <span className="home-svc-num">{service.num}</span>
            <span className="home-svc-name">{service.title}</span>
            <span className="home-svc-desc">{service.description}</span>
            <ArrowUpRightIcon className="home-svc-arrow" />
          </Link>
        ))}
      </div>
    </section>
  );
}
