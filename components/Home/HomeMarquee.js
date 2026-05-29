import { HOME_MARQUEE_ITEMS } from "../../lib/homePageData";

export default function HomeMarquee() {
  const items = [...HOME_MARQUEE_ITEMS, ...HOME_MARQUEE_ITEMS];

  return (
    <div className="home-marquee-wrap" aria-hidden="true">
      <div className="home-marquee-track">
        {items.map((item, index) => (
          <div className="home-marquee-item" key={`${item}-${index}`}>
            {item}
            <span className="home-marquee-sep" />
          </div>
        ))}
      </div>
    </div>
  );
}
