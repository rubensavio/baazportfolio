'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./EnterpriseSolutions.scss";

const EnterpriseSolutions = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation({ threshold: 0.15 });

  const solutions = [
    {
      id: 1,
      icon: "/assets/ERP.svg",
      title: "ERP System Development",
      description:
        "Custom enterprise resource planning systems tailored to your specific business processes and requirements.",
      features: [
        "Integrated business processes",
        "Real-time analytics dashboard",
        "Process automation",
        "Custom workflows",
      ],
      bgColor: "#FFF7F2",
    },
    {
      id: 2,
      icon: "/assets/Bank.svg",
      title: "Banking & Fintech Platform",
      description:
        "Secure, compliant financial solutions with modern user experiences and robust backend systems.",
      features: [
        "PCI DSS compliance",
        "Fraud detection systems",
        "API banking integration",
        "Real-time transaction processing",
      ],
      bgColor: "#ECF0FB",
    },
    {
      id: 3,
      icon: "/assets/Legacy.svg",
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, scalable applications without disrupting business operations.",
      features: [
        "Technology stack assessment",
        "Phased migration strategy",
        "Data integrity preservation",
        "Minimal downtime transition",
      ],
      bgColor: "#FBF6EF",
    },
    {
      id: 4,
      icon: "/assets/CustomInternalTooling.svg",
      title: "Custom Internal Tooling",
      description:
        "Bespoke applications that streamline internal operations, enhance productivity, and reduce operational costs.",
      features: [
        "Employee productivity platforms",
        "Workflow automation tools",
        "Inventory management systems",
        "Supply chain optimization",
      ],
      bgColor: "#EDE2FF",
    },
  ];

  return (
    <section className="enterprise-solutions">
      <div className="enterprise-solutions-wrapper">
        <div className="enterprise-solutions-header animate-on-scroll animate-fade-up" ref={headerRef}>
          <h2 className="enterprise-solutions-heading">
            Enterprise-Grade Solutions
          </h2>
          <p className="enterprise-solutions-description">
            Our enterprise solutions are designed for scalability, security, and
            seamless integration with your existing systems.
          </p>
        </div>

        <div className="enterprise-solutions-grid animate-on-scroll animate-fade-up animate-delay-200" ref={gridRef}>
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div
                className="solution-header"
                style={{ backgroundColor: solution.bgColor }}
              >
                <div className="solution-icon">
                  <img src={solution.icon} alt={solution.title} />
                </div>
                <h3 className="solution-title">{solution.title}</h3>
              </div>
              <div className="solution-content">
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
