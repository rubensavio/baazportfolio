"use client";

import { useEffect, useState } from "react";
import { getRegionLabel } from "../../lib/regions";

export default function RegionLabel() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLabel(getRegionLabel(window.location.hostname));
    }
  }, []);

  if (!label) return <p className="hero-region-line" aria-hidden="true">&nbsp;</p>;

  return <p className="hero-region-line">{label}</p>;
}
