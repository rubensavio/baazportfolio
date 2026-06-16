import React from "react";
import FAQ from "../FAQ/FAQ";
import { HOME_FAQ_ITEMS } from "../../lib/homeFaq";
import "./HomeFaq.scss";

const HomeFaq = () => (
  <div className="home-faq">
    <FAQ
      faqs={HOME_FAQ_ITEMS}
      heading="FAQ"
    />
  </div>
);

export default HomeFaq;
