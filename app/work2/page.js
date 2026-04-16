import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import Work2Hero from "../../components/Work2Hero/Work2Hero";
import Work2Solution from "../../components/Work2Solution/Work2Solution";
import Work2Implementation from "../../components/Work2Implementation/Work2Implementation";
import Work2Results from "../../components/Work2Results/Work2Results";
import Work2Impact from "../../components/Work2Impact/Work2Impact";
import Work2Challenges from "../../components/Work2Challenges/Work2Challenges";
import Work2Comparison from "../../components/Work2Comparison/Work2Comparison";
import Work2BottomLine from "../../components/Work2BottomLine/Work2BottomLine";
import Work2FinalThoughts from "../../components/Work2FinalThoughts/Work2FinalThoughts";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

export default function Work2() {
  return (
    <div className="work2">
      <ClientNavbar />
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
