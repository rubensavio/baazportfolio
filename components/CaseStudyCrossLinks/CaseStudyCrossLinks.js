import Link from "next/link";
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
      <div className="case-study-cross-links__inner">
        {eyebrow && (
          <p className="case-study-cross-links__eyebrow">{eyebrow}</p>
        )}
        <h2 id="case-study-cross-links-heading" className="case-study-cross-links__title">
          {title}
        </h2>
        {description && (
          <p className="case-study-cross-links__lead">{description}</p>
        )}
        <ul className="case-study-cross-links__list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="case-study-cross-links__anchor">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
