import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    // Anti-bot simple
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // Validation email très simple
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    // Expéditeur avec fallback dev
    const FROM_EMAIL =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // Envoi d'email
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email, // ← ICI (camelCase)
      subject: `Nouveau message de ${name} (Portfolio)`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 8px 0;">Nouveau message — Portfolio</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Message :</strong></p>
          <div style="white-space:pre-wrap;border-left:4px solid #FF9966;padding-left:12px">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { ok: false, error: "Échec de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur." },
      { status: 500 }
    );
  }
}

// petite util pour éviter l'injection HTML
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
