import React from "react";
import "./HowWeWork.scss";

const HowWeWork = () => {

  const processSteps = [
    {
      id: 1,
      number: "1",
      title: "Discovery",
      description:
        "We start with workshops and research to fully understand your business needs and user requirements.",
      color: "#2E68FD", // Blue
    },
    {
      id: 2,
      number: "2",
      title: "Design",
      description:
        "Our designers create wireframes and interactive prototypes that bring your vision to life.",
      color: "#D77E1B", // Orange
    },
    {
      id: 3,
      number: "3",
      title: "Development",
      description:
        "Using agile methodology, we build your solution with regular sprints and demonstrations.",
      color: "#3B7793", // Teal
    },
    {
      id: 4,
      number: "4",
      title: "QA & Testing",
      description:
        "Rigorous testing combining automated and manual approaches ensures a flawless product",
      color: "#08A965", // Green
    },
    {
      id: 5,
      number: "5",
      title: "Launch & Support",
      description:
        "We help you deploy and then provide ongoing support for continuous improvement..",
      color: "#FC4343", // Red
    },
  ];

  return (
    <section className="how-we-work">
      <div className="how-we-work-background">
        <img
          src="/assets/HowWeWorkBg.svg"
          alt=""
          className="how-we-work-bg-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="how-we-work-wrapper">
        <div className="how-we-work-header animate-fade-up animate-in">
          <span className="how-we-work-label">How We Work</span>
          <h2 className="how-we-work-heading">
            Our proven process from discovery to delivery
          </h2>
          <p className="how-we-work-lede">
            Regular demos and clear handoffs between phases—so you always have
            something concrete to review before we advance.
          </p>
        </div>

        <div className="how-we-work-container">
          <div
            className="process-steps animate-fade-up animate-in animate-delay-200"
          >
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`process-step step-${step.id}`}
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                <div
                  className="step-number"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
