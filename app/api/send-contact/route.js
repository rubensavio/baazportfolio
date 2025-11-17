import nodemailer from "nodemailer";

// Ensure this route is dynamic (not statically generated)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Helper to escape HTML and prevent XSS
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req) {
  try {
    // Support standard form POST (application/x-www-form-urlencoded), multipart/form-data, and JSON
    let body;
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      // Handle standard HTML form submission
      const text = await req.text();
      const params = new URLSearchParams(text);
      body = Object.fromEntries(params.entries());
    } else {
      // Handle multipart/form-data (file uploads, etc.)
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    }

    // Extract and sanitize form data (URL decode if needed)
    const decodeValue = (value) => {
      try {
        return decodeURIComponent(String(value || "").replace(/\+/g, " "));
      } catch {
        return String(value || "").replace(/\+/g, " ");
      }
    };

    const name = decodeValue(body?.name).trim();
    const email = decodeValue(body?.email).trim();
    const company = decodeValue(body?.company).trim();
    const category = decodeValue(body?.category).trim();
    const description = decodeValue(body?.description).trim();

    // Basic validation
    if (!name || !email || !company || !category || !description) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/get-in-touch?error=1" },
      });
    }

    if (!isValidEmail(email)) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/get-in-touch?error=1" },
      });
    }

    // Check if SMTP is configured
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error(
        "SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in environment variables."
      );
      return new Response(null, {
        status: 303,
        headers: { Location: "/get-in-touch?error=1" },
      });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "chit@baaz.live";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      process.env.SMTP_USER ||
      "no-reply@baaz.live";

    // Create transporter with proper error handling
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Escape all user input to prevent XSS
    const subject = "New Lead from Get in Touch";
    const html = `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Company:</b> ${escapeHtml(company)}</p>
      <p><b>Category:</b> ${escapeHtml(category)}</p>
      <p><b>Description:</b> ${escapeHtml(description)}</p>
    `;

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      subject,
      html,
      replyTo: email,
    });

    // Redirect back with success flag
    return new Response(null, {
      status: 303,
      headers: { Location: "/get-in-touch?sent=1" },
    });
  } catch (err) {
    // Log the error on the server for debugging (Vercel logs)
    console.error("send-contact error:", err);
    // Redirect back with error flag; avoid leaking details to client
    return new Response(null, {
      status: 303,
      headers: { Location: "/get-in-touch?error=1" },
    });
  }
}
