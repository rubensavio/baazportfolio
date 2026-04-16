"use client";

export default function BlogError({ error, reset }) {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2>Failed to load blog.</h2>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: "0.6rem 1.4rem",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
