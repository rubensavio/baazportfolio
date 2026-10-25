"use client";

import { useEffect, useRef, useState } from "react";
import "./OrbitWorkflow.scss";

// How quickly the displayed progress chases the scroll position per frame.
// Lower is smoother and lazier; higher is tighter.
const EASE = 0.085;

/**
 * Scroll-driven radial process.
 *
 * The section pins inside a tall scroll region. Scrolling sets a *target*
 * progress; a requestAnimationFrame loop eases the displayed progress toward
 * it. That is what keeps the arc gliding even though a mouse wheel delivers
 * scroll in steps. The active step, the arc and the tip dot all derive from the
 * eased value, so they move together. Clicking a node scrolls the page to that
 * step's slice of the region.
 */
export default function OrbitWorkflow({ steps }) {
  const wrapRef = useRef(null);
  const target = useRef(0);
  const shown = useRef(0);
  const raf = useRef(0);
  const [progress, setProgress] = useState(0);
  const n = steps.length;

  useEffect(() => {
    const readTarget = () => {
      const wrap = wrapRef.current;
      if (!wrap) return 0;
      const r = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      return total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    };

    const loop = () => {
      const diff = target.current - shown.current;
      if (Math.abs(diff) < 0.0004) {
        shown.current = target.current;
        setProgress(shown.current);
        raf.current = 0;
        return;
      }
      shown.current += diff * EASE;
      setProgress(shown.current);
      raf.current = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      target.current = readTarget();
      if (!raf.current) raf.current = requestAnimationFrame(loop);
    };

    // Land directly on the current position on first paint, no sweep-in.
    target.current = readTarget();
    shown.current = target.current;
    setProgress(shown.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const active = Math.min(n - 1, Math.floor(progress * n));
  const arc = progress * 100;

  const jump = (i) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const total = wrap.offsetHeight - window.innerHeight;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + total * ((i + 0.5) / n), behavior: "smooth" });
  };

  const R = 44;
  const at = (frac) => {
    const a = frac * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  };
  const tip = at(progress);
  const step = steps[active];

  return (
    <div
      ref={wrapRef}
      className="wf-orbit-scroll"
      style={{ height: `${100 + n * 44}vh` }}
    >
      <div className="wf-orbit-stage">
        <div className="wf-orbit">
          <div className="wf-orbit-ring">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle className="wf-orbit-track" cx="50" cy="50" r={R} />
              <circle
                className="wf-orbit-arc"
                cx="50"
                cy="50"
                r={R}
                pathLength="100"
                style={{ strokeDasharray: `${arc} 100` }}
              />
            </svg>

            {steps.map((s, i) => {
              const { x, y } = at(i / n);
              return (
                <button
                  key={s.title}
                  type="button"
                  className={`wf-orbit-node${i === active ? " is-active" : ""}${
                    i < active ? " is-past" : ""
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onClick={() => jump(i)}
                  aria-pressed={i === active}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              );
            })}

            {/* The head of the arc, so the motion reads as continuous. */}
            <span
              className="wf-orbit-tip"
              style={{ left: `${tip.x}%`, top: `${tip.y}%` }}
              aria-hidden="true"
            />

            <div className="wf-orbit-centre" key={active}>
              <span className="wf-orbit-num" aria-hidden="true">
                {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="wf-orbit-title">{step.title}</h3>
            </div>
          </div>

          <div className="wf-orbit-detail" key={`d-${active}`}>
            <span className="wf-orbit-kicker">
              Step {active + 1} of {n}
            </span>
            <h3 className="wf-orbit-detail-title">{step.title}</h3>
            <p className="wf-orbit-desc">{step.description}</p>
            <span className="wf-orbit-hint" aria-hidden="true">
              Scroll to continue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
