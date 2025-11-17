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

    // Log received body for debugging (in production, remove sensitive data)
    console.log("Received form data:", {
      hasName: !!body?.name,
      hasEmail: !!body?.email,
      hasCompany: !!body?.company,
      hasCountry: !!body?.country,
      hasDescription: !!body?.description,
      keys: Object.keys(body || {}),
    });

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
    const country = decodeValue(body?.country).trim();
    const description = decodeValue(body?.description).trim();

    // Basic validation
    if (!name || !email || !company || !country || !description) {
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
      // Add connection timeout for serverless environments
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify transporter configuration (optional - skip if it fails, try sending anyway)
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.warn(
        "SMTP verification failed, but will attempt to send:",
        verifyErr.message
      );
      // Continue anyway - some SMTP servers don't support verify()
    }

    // Escape all user input to prevent XSS
    const subject = "New Lead from Get in Touch";
    const html = `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Company:</b> ${escapeHtml(company)}</p>
      <p><b>Country:</b> ${escapeHtml(country)}</p>
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
    // Use absolute URL for Vercel compatibility
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "";
    const redirectUrl = baseUrl
      ? `${baseUrl}/get-in-touch?sent=1`
      : "/get-in-touch?sent=1";

    return new Response(null, {
      status: 303,
      headers: {
        Location: redirectUrl,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err) {
    // Log the error on the server for debugging (Vercel logs)
    console.error("send-contact error:", err);
    console.error("Error details:", {
      message: err.message,
      stack: err.stack,
      env: {
        hasHost: !!process.env.SMTP_HOST,
        hasUser: !!process.env.SMTP_USER,
        hasPass: !!process.env.SMTP_PASS,
      },
    });

    // Redirect back with error flag; avoid leaking details to client
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "";
    const redirectUrl = baseUrl
      ? `${baseUrl}/get-in-touch?error=1`
      : "/get-in-touch?error=1";

    return new Response(null, {
      status: 303,
      headers: {
        Location: redirectUrl,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  }
}
