"use client";

import React from "react";
import FAQ from "../FAQ/FAQ";
import { HOME_FAQ_ITEMS } from "../../lib/homeFaq";
import "./HomeFaq.scss";

const HomeFaq = () => (
  <div className="home-faq">
    <FAQ
      faqs={HOME_FAQ_ITEMS}
      heading="Enterprise product engineering — direct answers"
    />
  </div>
);

export default HomeFaq;
