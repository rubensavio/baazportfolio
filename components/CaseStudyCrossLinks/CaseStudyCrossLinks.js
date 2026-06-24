import Link from "next/link";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import "./CaseStudyCrossLinks.scss";

export default function CaseStudyCrossLinks({
  eyebrow,
  title,
  description,
  links,
}) {
  if (!links?.length) return null;

  return (
    <aside
      className="case-study-cross-links"
      aria-labelledby="case-study-cross-links-heading"
    >
      <div className="case-study-cross-links__inner v2-wrap">
        {eyebrow && (
          <p className="case-study-cross-links__eyebrow v2-label">{eyebrow}</p>
        )}
        <h2
          id="case-study-cross-links-heading"
          className="case-study-cross-links__title v2-display"
        >
          {title}
        </h2>
        {description && (
          <p className="case-study-cross-links__lead">{description}</p>
        )}
        <ul className="case-study-cross-links__list">
          {links.map(({ href, label }, index) => (
            <li key={href}>
              <Link href={href} className="case-study-cross-links__anchor">
                <span className="case-study-cross-links__index v2-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="case-study-cross-links__label">{label}</span>
                <ArrowUpRightIcon className="case-study-cross-links__icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
