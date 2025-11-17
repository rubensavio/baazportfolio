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
  console.log("=== SEND-CONTACT API CALLED ===");
  console.log("Request received at:", new Date().toISOString());

  try {
    // Support standard form POST (application/x-www-form-urlencoded), multipart/form-data, and JSON
    let body;
    const contentType = req.headers.get("content-type") || "";
    console.log("Content-Type:", contentType);

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
      console.error("Validation failed - missing fields:", {
        hasName: !!name,
        hasEmail: !!email,
        hasCompany: !!company,
        hasCountry: !!country,
        hasDescription: !!description,
      });
      const timestamp = Date.now();
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/get-in-touch?error=1&t=${timestamp}`,
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    if (!isValidEmail(email)) {
      console.error("Validation failed - invalid email:", email);
      const timestamp = Date.now();
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/get-in-touch?error=1&t=${timestamp}`,
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    // Check if SMTP is configured
    console.log("Checking SMTP configuration...");
    const smtpConfig = {
      hasHost: !!process.env.SMTP_HOST,
      hasUser: !!process.env.SMTP_USER,
      hasPass: !!process.env.SMTP_PASS,
      host: process.env.SMTP_HOST || "MISSING",
      user: process.env.SMTP_USER ? "SET (hidden)" : "MISSING",
      pass: process.env.SMTP_PASS ? "SET (hidden)" : "MISSING",
      port: process.env.SMTP_PORT || "MISSING",
      secure: process.env.SMTP_SECURE || "MISSING",
    };
    console.log("SMTP Config Status:", smtpConfig);

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("❌ SMTP configuration missing!");
      console.error("Missing:", {
        SMTP_HOST: !process.env.SMTP_HOST ? "MISSING" : "OK",
        SMTP_USER: !process.env.SMTP_USER ? "MISSING" : "OK",
        SMTP_PASS: !process.env.SMTP_PASS ? "MISSING" : "OK",
      });
      const timestamp = Date.now();
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/get-in-touch?error=1&t=${timestamp}`,
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    console.log("✅ SMTP configuration found");

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
    console.log("Attempting SMTP verification...");
    try {
      await transporter.verify();
      console.log("✅ SMTP verification successful");
    } catch (verifyErr) {
      console.warn(
        "⚠️ SMTP verification failed, but will attempt to send:",
        verifyErr.message
      );
      // Continue anyway - some SMTP servers don't support verify()
    }

    // Escape all user input to prevent XSS
    console.log("Preparing email...");
    const subject = "New Lead from Get in Touch";
    const html = `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Company:</b> ${escapeHtml(company)}</p>
      <p><b>Country:</b> ${escapeHtml(country)}</p>
      <p><b>Description:</b> ${escapeHtml(description)}</p>
    `;

    console.log("Sending email to:", toEmail);
    console.log("From:", fromEmail);

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      subject,
      html,
      replyTo: email,
    });

    console.log("✅ Email sent successfully!");

    // Redirect back with success flag
    // Use absolute URL for Vercel compatibility
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "";
    // Add timestamp to prevent caching
    const timestamp = Date.now();
    const redirectUrl = baseUrl
      ? `${baseUrl}/get-in-touch?sent=1&t=${timestamp}`
      : `/get-in-touch?sent=1&t=${timestamp}`;

    return new Response(null, {
      status: 303,
      headers: {
        Location: redirectUrl,
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (err) {
    // Log the error on the server for debugging (Vercel logs)
    console.error("=== SEND-CONTACT ERROR ===");
    console.error("Error message:", err.message);
    console.error("Error code:", err.code);
    console.error("Error name:", err.name);
    console.error("Full error:", err);

    // Check specific error types
    if (err.code === "EAUTH") {
      console.error(
        "❌ SMTP Authentication failed - check SMTP_USER and SMTP_PASS"
      );
    } else if (err.code === "ECONNECTION" || err.code === "ETIMEDOUT") {
      console.error(
        "❌ SMTP Connection failed - check SMTP_HOST and SMTP_PORT"
      );
    } else if (err.code === "ESOCKET") {
      console.error("❌ SMTP Socket error - network/firewall issue");
    }

    console.error("Environment check:", {
      hasHost: !!process.env.SMTP_HOST,
      hasUser: !!process.env.SMTP_USER,
      hasPass: !!process.env.SMTP_PASS,
      host: process.env.SMTP_HOST || "NOT SET",
      port: process.env.SMTP_PORT || "NOT SET",
      secure: process.env.SMTP_SECURE || "NOT SET",
    });

    console.error("Stack trace:", err.stack);
    console.error("========================");

    // Redirect back with error flag; avoid leaking details to client
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "";
    // Add timestamp to prevent caching
    const timestamp = Date.now();
    const redirectUrl = baseUrl
      ? `${baseUrl}/get-in-touch?error=1&t=${timestamp}`
      : `/get-in-touch?error=1&t=${timestamp}`;

    return new Response(null, {
      status: 303,
      headers: {
        Location: redirectUrl,
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  }
}
