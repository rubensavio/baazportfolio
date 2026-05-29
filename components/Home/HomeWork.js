import Link from "next/link";
import { ArrowLinkIcon, ArrowUpRightIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_WORK_ITEMS } from "../../lib/homePageData";
import { caseStudiesData } from "../../lib/caseStudiesData";

export default function HomeWork() {
  const totalCount = caseStudiesData.length;

  return (
    <section className="home-section" id="work" aria-labelledby="home-work-heading">
      <div className="home-wrap">
        <Reveal className="home-work-header">
          <h2 id="home-work-heading">Selected work</h2>
          <span className="home-label">
            {HOME_WORK_ITEMS.length} of {totalCount}+
          </span>
        </Reveal>

        {HOME_WORK_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="home-work-item">
            <span className="home-wi-num">{item.num}</span>
            <div className="home-wi-body">
              <div className="home-wi-title">{item.title}</div>
              <div className="home-wi-meta">
                {item.meta.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ArrowUpRightIcon className="home-wi-arrow" />
          </Link>
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
