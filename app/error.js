"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "var(--font-urbanist, system-ui, sans-serif)",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
        Something went wrong.
      </h2>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        {error?.message || "An unexpected error occurred on this page."}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "0.6rem 1.4rem",
          background: "#2E68FD",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Try again
      </button>
    </div>
  );
}
