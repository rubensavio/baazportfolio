import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Support standard form POST (no fetch) and JSON
    let body;
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    }

    const {
      name = "",
      email = "",
      company = "",
      category = "",
      description = "",
    } = body || {};

    const toEmail = process.env.CONTACT_TO_EMAIL || "chit@baaz.live";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      process.env.SMTP_USER ||
      "no-reply@baaz.live";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const subject = "New Lead from Get in Touch";
    const html = `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Category:</b> ${category}</p>
      <p><b>Description:</b> ${description}</p>
    `;

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      subject,
      html,
      replyTo: email || undefined,
    });

    // Redirect back with success flag for non-AJAX form submissions
    return new Response(null, {
      status: 303,
      headers: { Location: "/get-in-touch?sent=1" },
    });
  } catch (err) {
    // Log the error on the server for debugging
    console.error("send-contact error:", err);
    // Redirect back with error flag; avoid leaking details to client
    return new Response(null, {
      status: 303,
      headers: { Location: "/get-in-touch?error=1" },
    });
  }
}
