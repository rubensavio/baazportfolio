import Link from "next/link";
import { ArrowLinkIcon, ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_WORK_ITEMS } from "../../lib/homePageData";

export default function HomeWork() {
  return (
    <section className="home-section" id="work" aria-labelledby="home-work-heading">
      <div className="home-wrap">
        <Reveal className="home-work-header">
          <h2 id="home-work-heading">Selected work</h2>
          <span className="home-label">
            {HOME_WORK_ITEMS.length} engagements
          </span>
        </Reveal>

        {HOME_WORK_ITEMS.map((item) => (
          <Reveal
            key={item.num}
            as={Link}
            href={item.href}
            className="home-work-item home-work-item--stacked"
          >
            <span className="home-wi-num">{item.num}</span>
            <div className="home-wi-body">
              <div className="home-wi-meta">
                <span>{item.client}</span>
                <span>{item.industry}</span>
              </div>
              <div className="home-wi-title">{item.title}</div>
              <p className="home-wi-hook">{item.hook}</p>
            </div>
            <ArrowUpRightIcon className="home-wi-arrow" />
          </Reveal>
        ))}

        <div className="home-work-footer">
          <Link href="/case-studies" className="home-arrow-link">
            All case studies <ArrowLinkIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
