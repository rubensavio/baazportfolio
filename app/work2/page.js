"use client";

import React from "react";
import dynamic from "next/dynamic";
import Work2Hero from "../../components/Work2Hero/Work2Hero";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Work2Solution = dynamic(
  () => import("../../components/Work2Solution/Work2Solution"),
  { ssr: false }
);
const Work2Implementation = dynamic(
  () => import("../../components/Work2Implementation/Work2Implementation"),
  { ssr: false }
);
const Work2Results = dynamic(
  () => import("../../components/Work2Results/Work2Results"),
  { ssr: false }
);
const Work2Impact = dynamic(
  () => import("../../components/Work2Impact/Work2Impact"),
  { ssr: false }
);
const Work2Challenges = dynamic(
  () => import("../../components/Work2Challenges/Work2Challenges"),
  { ssr: false }
);
const Work2Comparison = dynamic(
  () => import("../../components/Work2Comparison/Work2Comparison"),
  { ssr: false }
);
const Work2BottomLine = dynamic(
  () => import("../../components/Work2BottomLine/Work2BottomLine"),
  { ssr: false }
);
const Work2FinalThoughts = dynamic(
  () => import("../../components/Work2FinalThoughts/Work2FinalThoughts"),
  { ssr: false }
);
const CTA = dynamic(() => import("../../components/CTA/CTA"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function Work2() {
  return (
    <div className="work2">
      <Headroom>
        <Navbar />
      </Headroom>
      <Work2Hero />
      <Work2Solution />
      <Work2Implementation />
      <Work2Results />
      <Work2Impact />
      <Work2Challenges />
      <Work2Comparison />
      <Work2BottomLine />
      <Work2FinalThoughts />
    </div>
  );
}
