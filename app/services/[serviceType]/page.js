"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

const servicesData = {
  "product-strategy": {
    label: "Product Strategy",
    heading: "Build Smarter. Launch Better.",
    description:
      "We help shape your product vision into a strategy that delivers real business value.",
    services: [
      {
        title: "Discovery Workshops",
        description:
          "Align stakeholders, identify key problems, and define clear goals.",
      },
      {
        title: "User & Market Research",
        description: "Back every decision with data and user insight.",
      },
      {
        title: "Roadmapping & MVP Planning",
        description: "Plan smart, build lean — launch what matters first.",
      },
      {
        title: "Feature Prioritization",
        description:
          "Focus on value, reduce waste. We help you pick what moves the needle.",
      },
      {
        title: "Go-To-Market Guidance",
        description:
          "From pricing models to rollout plans, we prepare you for launch.",
      },
    ],
  },
  "ui-ux-design": {
    label: "UI/UX Design",
    heading: "Designs That Delight. Interfaces That Work.",
    description:
      "We create intuitive, elegant, and conversion-driven user experiences.",
    services: [
      {
        title: "User Research & Personas",
        description: "Know your users deeply before designing for them.",
      },
      {
        title: "Wireframes & Prototyping",
        description: "Fast, interactive prototypes to test ideas early.",
      },
      {
        title: "Visual Design & Branding",
        description:
          "Beautiful interfaces aligned with your brand and purpose.",
      },
      {
        title: "Interaction Design & Microinteractions",
        description:
          "Subtle animations, smooth flows — experiences that feel alive.",
      },
      {
        title: "Usability Testing & Iteration",
        description: "Test with real users. Learn. Refine. Repeat.",
      },
    ],
  },
  "web-development": {
    label: "Web Development",
    heading: "Scalable, Fast & Future-Ready Web Solutions",
    description:
      "We craft robust websites and platforms tailored for performance and growth.",
    services: [
      {
        title: "Frontend Development",
        description:
          "Modern frameworks like React, Vue, or Angular. Clean, maintainable code.",
      },
      {
        title: "Backend Development",
        description:
          "Scalable APIs and databases using Node.js, Django, Laravel, or more.",
      },
      {
        title: "CMS & Headless CMS",
        description:
          "WordPress, Strapi, Contentful - you control the content with ease.",
      },
      {
        title: "E-Commerce & Web Portals",
        description: "Build platforms that sell and scale.",
      },
      {
        title: "Testing, Optimization & SEO",
        description: "Speed, accessibility, and visibility — done right.",
      },
    ],
  },
  "mobile-app": {
    label: "Mobile App",
    heading: "Mobile Apps That Users Love and Businesses Need",
    description:
      "From native to cross-platform, we design & build mobile apps that perform.",
    services: [
      {
        title: "iOS & Android Native Development",
        description: "Optimized performance for both platforms.",
      },
      {
        title: "Flutter & React Native",
        description: "Fast delivery with one codebase, multiple platforms.",
      },
      {
        title: "API Integration & Backend",
        description:
          "Seamless connection with your databases, payment systems, and more.",
      },
      {
        title: "UI/UX for Mobile",
        description:
          "Mobile-first design principles for a smooth and intuitive experience.",
      },
      {
        title: "App Store Optimization (ASO)",
        description: "Launch with confidence and visibility.",
      },
    ],
  },
  "ai-solution": {
    label: "AI Solution",
    heading: "Turn Data Into Intelligence",
    description:
      "We build AI-powered solutions that detect, predict, and automate.",
    services: [
      {
        title: "Computer Vision",
        description: "Defect detection, facial recognition, visual analytics.",
      },
      {
        title: "Natural Language Processing (NLP)",
        description: "Chatbots, sentiment analysis, language models.",
      },
      {
        title: "Predictive Analytics",
        description: "Forecast future trends with machine learning.",
      },
      {
        title: "Custom AI Models",
        description:
          "Train, fine-tune, and deploy tailored AI models for your business.",
      },
      {
        title: "Integration & Deployment",
        description:
          "Scalable APIs and cloud-based deployment for real-time performance.",
      },
    ],
  },
};

export default function Services() {
  const params = useParams();
  const serviceType = params?.serviceType;
  const serviceData =
    servicesData[serviceType] || servicesData["product-strategy"];

  // Scroll to top on service type change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  return (
    <div className="services-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="services-hero">
        <div className="services-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.svg"
            alt="Services background"
            className="services-hero-bg-image"
          />
        </div>
        <div className="services-hero-wrapper">
          <div className="services-header">
            <span className="services-label">{serviceData.label}</span>
            <h1 className="services-heading">{serviceData.heading}</h1>
            <p className="services-description">{serviceData.description}</p>
          </div>

          <div className="service-cards-grid">
            {serviceData.services.map((service, index) => (
              <div key={index} className="service-info-card">
                <h3 className="service-info-title">{service.title}</h3>
                <p className="service-info-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
