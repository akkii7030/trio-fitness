import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipientEmail = "akkii77580@gmail.com";
export const runtime = "nodejs";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name ?? "").toString().trim();
    const email = (body?.email ?? "").toString().trim();
    const phone = (body?.phone ?? "").toString().trim();
    const goal = (body?.goal ?? "").toString().trim();
    const message = (body?.message ?? "").toString().trim();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 },
      );
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const gmailUser = (process.env.GMAIL_USER ?? "").trim();
    const gmailAppPasswordRaw = (process.env.GMAIL_APP_PASSWORD ?? "").trim();
    const gmailAppPassword = gmailAppPasswordRaw.replace(/\s+/g, "");

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 },
      );
    }
    if (gmailAppPassword.includes("replace_with_gmail_app_password")) {
      return NextResponse.json(
        { error: "GMAIL_APP_PASSWORD is still a placeholder value." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Trio Fitness Website" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        "New Trio Fitness contact enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Goal: ${goal || "Not provided"}`,
        `Message: ${message || "Not provided"}`,
      ].join("\n"),
      html: `
        <div style="background:#0b0b0b;padding:28px;font-family:Arial,sans-serif;color:#f3f3f3;">
          <div style="max-width:640px;margin:0 auto;border:1px solid #2b2b2b;border-radius:12px;overflow:hidden;background:#141414;">
            <div style="padding:18px 22px;background:linear-gradient(90deg,#6d0000,#c80000);">
              <h2 style="margin:0;font-size:20px;letter-spacing:.4px;color:#fff;">New Website Enquiry</h2>
              <p style="margin:6px 0 0;color:#ffe8e8;font-size:13px;">Trio Fitness Contact Form Submission</p>
            </div>
            <div style="padding:22px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;color:#aaaaaa;width:160px;">Name</td>
                  <td style="padding:10px 0;color:#ffffff;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#aaaaaa;">Email</td>
                  <td style="padding:10px 0;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#ff5959;text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#aaaaaa;">Phone</td>
                  <td style="padding:10px 0;color:#ffffff;">${escapeHtml(phone)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#aaaaaa;">Fitness Goal</td>
                  <td style="padding:10px 0;color:#ffffff;">${escapeHtml(goal || "Not provided")}</td>
                </tr>
              </table>
              <div style="margin-top:16px;padding:14px;border:1px solid #2a2a2a;border-radius:8px;background:#101010;">
                <p style="margin:0 0 8px;color:#aaaaaa;">Message</p>
                <p style="margin:0;line-height:1.55;color:#ffffff;white-space:pre-wrap;">${escapeHtml(message || "Not provided")}</p>
              </div>
            </div>
            <div style="padding:12px 22px;border-top:1px solid #2a2a2a;color:#888;font-size:12px;">
              Received from trio-fitness website contact form.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    const details =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? error.message
        : undefined;
    return NextResponse.json(
      { error: "Failed to send message.", details },
      { status: 500 },
    );
  }
}
