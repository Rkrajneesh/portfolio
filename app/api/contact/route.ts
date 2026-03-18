import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { personalInfo } from "@/lib/data";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(4000),
});

export async function POST(req: Request) {
  try {
    const json = (await req.json().catch(() => null)) as unknown;
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form input." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || personalInfo.email;
    const from = process.env.CONTACT_FROM || user || personalInfo.email;

    if (!host || !port || !user || !pass) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const { name, email, message } = parsed.data;

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui; line-height: 1.55">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space: pre-wrap; padding: 12px; background: #f5f5f5; border-radius: 10px">${escapeHtml(
            message
          )}</pre>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

