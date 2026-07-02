"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowBackIcon,
  ArrowLinkIcon,
} from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import { HOME_CTA } from "../../lib/homePageData";
import { VISION_INTELLIGENCE_CASE_STUDY as cs } from "../../lib/visionIntelligenceCaseStudy";
import "./VisionIntelligenceCaseStudy.scss";

const MONO =
  'var(--v2-mono, ui-monospace, "SF Mono", "JetBrains Mono", monospace)';

export default function VisionIntelligenceCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="baaz-v2 vi-casestudy">
      <ClientNavbar />

      <div className="v2-wrap vi-cs-back-wrap">
        <Link
          href="/technologies/vision-intelligence"
          className="vi-cs-back v2-arrow-link"
        >
          <ArrowBackIcon className="vi-cs-back-icon" />
          Vision Intelligence
        </Link>
      </div>

      <main className="vi-cs-main v2-wrap">
        <header className="vi-cs-hero">
          <span className="vi-cs-label">{cs.label}</span>
          <h1 className="vi-cs-title">{cs.title}</h1>
          <p className="vi-cs-summary">{cs.summary}</p>
          <div className="vi-cs-hero-actions">
            <Link
              href={HOME_CTA.callHref}
              className="vi-cs-btn vi-cs-btn--primary"
            >
              Talk to an Expert <ArrowLinkIcon />
            </Link>
            <a href="#inside" className="vi-cs-btn vi-cs-btn--secondary">
              See the Platform in Action
            </a>
          </div>
        </header>

        <section className="vi-cs-metrics" aria-label="Key results">
          {cs.metrics.map((m) => (
            <div className="vi-cs-metric" key={m.label}>
              <span className="vi-cs-metric-val">{m.value}</span>
              <span className="vi-cs-metric-label">{m.label}</span>
            </div>
          ))}
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-overview-heading">
          <h2 id="vi-cs-overview-heading" className="vi-cs-section-heading">
            Overview
          </h2>
          <p className="vi-cs-body">{cs.overview}</p>
        </section>

        <section
          className="vi-cs-section"
          aria-labelledby="vi-cs-whychoose-heading"
        >
          <span className="vi-cs-eyebrow">Why us</span>
          <h2 id="vi-cs-whychoose-heading" className="vi-cs-section-heading">
            Why teams choose our vision intelligence platform
          </h2>
          <div className="vi-cs-whygrid">
            {cs.whyChoose.map((item, i) => (
              <article className="vi-cs-whycard" key={item.title}>
                <span className="vi-cs-whynum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="vi-cs-whytitle">{item.title}</h3>
                <p className="vi-cs-whydesc">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-workflow-heading">
          <span className="vi-cs-eyebrow">Process</span>
          <h2 id="vi-cs-workflow-heading" className="vi-cs-section-heading">
            How it works
          </h2>
          <div className="vi-cs-process">
            {cs.workflow.map((step) => (
              <article className="vi-cs-process-row" key={step.title}>
                <span className="vi-cs-process-num">{step.step}</span>
                <h3 className="vi-cs-process-title">{step.title}</h3>
                <p className="vi-cs-process-desc">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-capabilities-heading">
          <span className="vi-cs-eyebrow">Capabilities</span>
          <h2 id="vi-cs-capabilities-heading" className="vi-cs-section-heading">
            Platform capabilities
          </h2>
          <div className="vi-cs-capgrid">
            {cs.capabilities.map((cap, i) => (
              <article className="vi-cs-capcard" key={cap.title}>
                <span className="vi-cs-capnum">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <h3 className="vi-cs-card-title">{cap.title}</h3>
                <p className="vi-cs-card-desc">{cap.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="inside"
          className="vi-cs-section"
          aria-labelledby="vi-cs-modules-heading"
        >
          <span className="vi-cs-eyebrow">Module tour</span>
          <h2 id="vi-cs-modules-heading" className="vi-cs-section-heading">
            Inside the platform
          </h2>
          <div className="vi-cs-modtour">
            {/* 01 Live Record - text left / panel right */}
            <article className="vi-cs-mod">
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">01 - Live Record</div>
                <h3 className="vi-cs-mod-title">Live Record</h3>
                <p className="vi-cs-mod-desc">
                  Wearable capture with a live camera preview and voice-driven
                  task intent, so context is captured in real time - not
                  reconstructed later.
                </p>
              </div>
              <div className="vi-cs-panel" style={{ padding: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "#8A8A87",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#F4F4F1",
                    }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "#FF4D4D",
                        display: "inline-block",
                      }}
                    />
                    REC&nbsp;&nbsp;00:04:12
                  </span>
                  <span>1080p · 30fps</span>
                </div>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    borderRadius: 10,
                    overflow: "hidden",
                    background:
                      "repeating-linear-gradient(135deg,#161616,#161616 11px,#101010 11px,#101010 22px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "13%",
                      top: "46%",
                      width: "27%",
                      height: "34%",
                      border: "1.5px solid var(--v2-accent)",
                      borderRadius: 3,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: -21,
                        left: -1.5,
                        background: "var(--v2-accent)",
                        color: "#080808",
                        fontFamily: MONO,
                        fontWeight: 600,
                        fontSize: 10,
                        padding: "2px 6px",
                        borderRadius: 3,
                        whiteSpace: "nowrap",
                      }}
                    >
                      hand · 0.94
                    </span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "54%",
                      top: "28%",
                      width: "19%",
                      height: "44%",
                      border: "1.5px solid rgba(255,255,255,0.75)",
                      borderRadius: 3,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: -21,
                        left: -1,
                        background: "rgba(255,255,255,0.92)",
                        color: "#080808",
                        fontFamily: MONO,
                        fontWeight: 600,
                        fontSize: 10,
                        padding: "2px 6px",
                        borderRadius: 3,
                        whiteSpace: "nowrap",
                      }}
                    >
                      bottle · 0.88
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: 14,
                    background: "#0B0B0B",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "#B6B6B2",
                  }}
                >
                  <span style={{ color: "var(--v2-accent)" }}>◉ intent</span>
                  &nbsp;&nbsp;&quot;picking up the bottle and sliding it to the
                  left tray&quot;
                </div>
              </div>
            </article>

            {/* 02 Episodes - panel left / text right */}
            <article className="vi-cs-mod vi-cs-mod--rev">
              <div className="vi-cs-panel">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{ fontFamily: MONO, fontSize: 12, color: "#8A8A87" }}
                  >
                    Episode #0142 · assembling
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 11,
                      color: "var(--v2-accent)",
                      border: "1px solid rgba(199,241,60,0.35)",
                      borderRadius: 100,
                      padding: "3px 10px",
                    }}
                  >
                    4 steps
                  </span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {[
                    ["01", "Approach workstation", "0:00–0:06"],
                    ["02", "Grasp bottle", "0:06–0:11"],
                    ["03", "Slide to tray", "0:11–0:17"],
                    ["04", "Release & retract", "0:17–0:22"],
                  ].map(([n, t, tc]) => (
                    <div
                      key={n}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        background: "#0B0B0B",
                        borderRadius: 8,
                        padding: "13px 14px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          color: "var(--v2-accent)",
                          width: 22,
                        }}
                      >
                        {n}
                      </span>
                      <span style={{ flex: 1, fontSize: 14, color: "#E7E7E4" }}>
                        {t}
                      </span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          color: "#8A8A87",
                        }}
                      >
                        {tc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">02 - Episodes</div>
                <h3 className="vi-cs-mod-title">Episodes</h3>
                <p className="vi-cs-mod-desc">
                  Captured footage chunks assembled automatically into complete,
                  step-by-step task workflows - steps, tools, and timing intact.
                </p>
              </div>
            </article>

            {/* 03 Review Queue - text left / panel right */}
            <article className="vi-cs-mod">
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">03 - Review Queue</div>
                <h3 className="vi-cs-mod-title">Review Queue</h3>
                <p className="vi-cs-mod-desc">
                  The human-in-the-loop layer for QA - approve, reject, or
                  correct AI labels before they ship into a dataset.
                </p>
              </div>
              <div className="vi-cs-panel">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "#8A8A87",
                  }}
                >
                  <span>Review queue</span>
                  <span style={{ color: "#F4F4F1" }}>12 pending</span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <div
                    style={{
                      background: "#0B0B0B",
                      border: "1px solid var(--v2-accent)",
                      borderRadius: 10,
                      padding: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <span style={{ fontSize: 14, color: "#F4F4F1" }}>
                        action: <b style={{ fontWeight: 600 }}>slide_object</b>
                      </span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          color: "var(--v2-accent)",
                        }}
                      >
                        conf 0.92
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span
                        style={{
                          flex: 1,
                          textAlign: "center",
                          background: "var(--v2-accent)",
                          color: "#080808",
                          borderRadius: 6,
                          padding: 8,
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        Approve
                      </span>
                      <span
                        style={{
                          flex: 1,
                          textAlign: "center",
                          border: "1px solid rgba(255,255,255,0.18)",
                          borderRadius: 6,
                          padding: 8,
                          fontSize: 13,
                          color: "#C9C9C6",
                        }}
                      >
                        Edit
                      </span>
                      <span
                        style={{
                          flex: 1,
                          textAlign: "center",
                          border: "1px solid rgba(255,255,255,0.18)",
                          borderRadius: 6,
                          padding: 8,
                          fontSize: 13,
                          color: "#C9C9C6",
                        }}
                      >
                        Reject
                      </span>
                    </div>
                  </div>
                  {[
                    ["bottle", "conf 0.88", 0.65],
                    ["gripper", "conf 0.71", 0.5],
                  ].map(([obj, conf, op]) => (
                    <div
                      key={obj}
                      style={{
                        background: "#0B0B0B",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10,
                        padding: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        opacity: op,
                      }}
                    >
                      <span style={{ fontSize: 14, color: "#E7E7E4" }}>
                        object: <b style={{ fontWeight: 600 }}>{obj}</b>
                      </span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: 12,
                          color: "#8A8A87",
                        }}
                      >
                        {conf}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* 04 Datasets - panel left / text right */}
            <article className="vi-cs-mod vi-cs-mod--rev">
              <div className="vi-cs-panel">
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "#8A8A87",
                    marginBottom: 16,
                  }}
                >
                  Datasets
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 0.7fr 0.7fr 1fr",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "#6E6E6B",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "0 12px 12px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span>Version</span>
                  <span>Episodes</span>
                  <span>Quality</span>
                  <span style={{ textAlign: "right" }}>Format</span>
                </div>
                {[
                  ["v1.3", "1,204", "A", "var(--v2-accent)", "LeRobot", true],
                  ["v1.2", "980", "A", "var(--v2-accent)", "RLDS", true],
                  ["v1.1", "612", "B+", "#D6C24E", "DROID", false],
                ].map(([v, ep, q, qc, fmt, border]) => (
                  <div
                    key={v}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 0.7fr 0.7fr 1fr",
                      alignItems: "center",
                      padding: "15px 12px",
                      borderBottom: border
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                      fontSize: 13,
                      color: "#E7E7E4",
                    }}
                  >
                    <span style={{ fontFamily: MONO }}>{v}</span>
                    <span style={{ fontFamily: MONO, color: "#9A9A97" }}>
                      {ep}
                    </span>
                    <span style={{ color: qc, fontWeight: 600 }}>{q}</span>
                    <span style={{ textAlign: "right" }}>
                      <span
                        style={{
                          border: "1px solid rgba(255,255,255,0.16)",
                          borderRadius: 4,
                          padding: "3px 8px",
                          fontFamily: MONO,
                          fontSize: 11,
                        }}
                      >
                        {fmt}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">04 - Datasets</div>
                <h3 className="vi-cs-mod-title">Datasets</h3>
                <p className="vi-cs-mod-desc">
                  Versioned, quality-scored datasets, ready to export to any
                  supported training format - with full lineage on every
                  release.
                </p>
              </div>
            </article>

            {/* 05 Knowledge Graph - text left / panel right */}
            <article className="vi-cs-mod">
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">05 - Knowledge Graph</div>
                <h3 className="vi-cs-mod-title">Knowledge Graph</h3>
                <p className="vi-cs-mod-desc">
                  Actions and objects mapped across every episode, with
                  occurrence counts and average confidence scores.
                </p>
              </div>
              <div className="vi-cs-panel">
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: "#8A8A87",
                    marginBottom: 8,
                  }}
                >
                  Knowledge graph · 6 nodes
                </div>
                <div style={{ position: "relative", height: 260 }}>
                  <svg
                    viewBox="0 0 420 260"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {[
                      [90, 60],
                      [340, 58],
                      [70, 200],
                      [350, 205],
                      [215, 235],
                    ].map(([x, y], k) => (
                      <line
                        key={k}
                        x1="210"
                        y1="130"
                        x2={x}
                        y2={y}
                        stroke="rgba(199,241,60,0.35)"
                        strokeWidth="1.5"
                      />
                    ))}
                    <circle cx="210" cy="130" r="7" fill="#C7F13C" />
                    {[
                      [90, 60],
                      [340, 58],
                      [70, 200],
                      [350, 205],
                      [215, 235],
                    ].map(([x, y], k) => (
                      <circle key={k} cx={x} cy={y} r="5" fill="#F4F4F1" />
                    ))}
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: "44%",
                      top: "40%",
                      fontFamily: MONO,
                      fontSize: 12,
                      color: "var(--v2-accent)",
                    }}
                  >
                    grasp
                  </span>
                  {[
                    ["hand · 214", { left: "9%", top: "12%" }],
                    ["bottle · 188", { right: "6%", top: "11%" }],
                    ["slide · 142", { left: "4%", bottom: "14%" }],
                    ["tray · 96", { right: "5%", bottom: "12%" }],
                    ["release · 88", { left: "44%", bottom: "2%" }],
                  ].map(([label, pos]) => (
                    <span
                      key={label}
                      style={{
                        position: "absolute",
                        ...pos,
                        fontFamily: MONO,
                        fontSize: 11,
                        color: "#C9C9C6",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* 06 Search & Analytics - panel left / text right */}
            <article className="vi-cs-mod vi-cs-mod--rev">
              <div className="vi-cs-panel">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#0B0B0B",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "11px 14px",
                    fontFamily: MONO,
                    fontSize: 13,
                    color: "#8A8A87",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ color: "var(--v2-accent)" }}>⚲</span>{" "}
                  action:slide AND conf&gt;0.9
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 22 }}>
                  {[
                    ["3,410", "episodes", "#F4F4F1"],
                    ["128h", "footage", "#F4F4F1"],
                    ["0.91", "avg conf", "var(--v2-accent)"],
                  ].map(([val, lbl, c]) => (
                    <div
                      key={lbl}
                      style={{
                        flex: 1,
                        background: "#0B0B0B",
                        borderRadius: 8,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--v2-serif)",
                          fontStyle: "italic",
                          fontSize: 26,
                          color: c,
                        }}
                      >
                        {val}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#8A8A87",
                          marginTop: 4,
                        }}
                      >
                        {lbl}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 8,
                    height: 76,
                  }}
                >
                  {[
                    ["38%", "rgba(199,241,60,0.28)"],
                    ["52%", "rgba(199,241,60,0.4)"],
                    ["46%", "rgba(199,241,60,0.34)"],
                    ["64%", "rgba(199,241,60,0.55)"],
                    ["72%", "rgba(199,241,60,0.7)"],
                    ["88%", "var(--v2-accent)"],
                  ].map(([h, bg], k) => (
                    <div
                      key={k}
                      style={{
                        flex: 1,
                        height: h,
                        background: bg,
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="vi-cs-mod-text">
                <div className="vi-cs-mod-eyebrow">06 - Search &amp; Analytics</div>
                <h3 className="vi-cs-mod-title">Search &amp; Analytics</h3>
                <p className="vi-cs-mod-desc">
                  Search episodes by action or annotation, and track episode
                  counts, duration, annotation volume, and confidence trends
                  over time.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-usecases-heading">
          <span className="vi-cs-eyebrow">Applications</span>
          <h2 id="vi-cs-usecases-heading" className="vi-cs-section-heading">
            Where it's used
          </h2>
          <div className="vi-cs-whygrid">
            {cs.useCases.map((uc) => (
              <article className="vi-cs-appcard" key={uc.title}>
                <h3 className="vi-cs-apptitle">{uc.title}</h3>
                <p className="vi-cs-appdesc">{uc.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-formats-heading">
          <h2 id="vi-cs-formats-heading" className="vi-cs-section-heading">
            Exports to every major training format
          </h2>
          <ul className="vi-cs-formats">
            {cs.exportFormats.map((f) => (
              <li key={f} className="vi-cs-format">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="vi-cs-closing">
          <h2 className="vi-cs-closing-heading">
            Have a vision-intelligence problem in mind?
          </h2>
          <p className="vi-cs-closing-sub">
            Tell us what you want to build - we'll tell you how fast we can ship
            it and what it'll cost.
          </p>
          <div className="vi-cs-hero-actions">
            <Link
              href={HOME_CTA.briefHref}
              className="vi-cs-btn vi-cs-btn--primary"
            >
              Get in touch <ArrowLinkIcon />
            </Link>
            <Link
              href={HOME_CTA.callHref}
              className="vi-cs-btn vi-cs-btn--secondary"
            >
              Schedule a call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
