"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowBackIcon } from "../icons/ArrowIcons";

/**
 * "All services" navigation control shown on service / technology detail pages.
 * Renders a back arrow only when the user got here by clicking a card in the
 * /services hub (which sets sessionStorage "servicesNavSource" = "hub").
 * Any other entry — the "What we do" nav, a direct link, etc. — renders a
 * neutral outline button, since there's no real "back" to go to.
 * The marker is consumed on read so a reload doesn't keep the arrow around.
 */
export default function ServicesBackLink() {
  const [cameFromServices, setCameFromServices] = useState(false);

  useEffect(() => {
    try {
      const source = sessionStorage.getItem("servicesNavSource");
      sessionStorage.removeItem("servicesNavSource");
      setCameFromServices(source === "hub");
    } catch {
      setCameFromServices(false);
    }
  }, []);

  return (
    <div className="v2-wrap services-back-wrap">
      {cameFromServices ? (
        <Link href="/services" className="services-back v2-arrow-link">
          <ArrowBackIcon className="services-back-icon" />
          All services
        </Link>
      ) : (
        <Link href="/services" className="services-back-btn">
          All services
        </Link>
      )}
    </div>
  );
}
