import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  date: string;
  guests?: string;
  message?: string;
};

// Prefer environment variable, but fall back to the provided Make.com webhook URL.
// NOTE: Keeping webhook URLs out of the repo (via env vars) is more secure.
const DEFAULT_MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/dhal8kl7x61qo2eru6lnqcnlembb4o4w";

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip.trim();
  return "unknown";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name: string) {
  // letters (incl accents), spaces, hyphen, apostrophe
  return /^[\p{L}][\p{L}\p{M}\s'-]{0,48}[\p{L}\p{M}]$/u.test(name);
}

function isValidPhone(phone: string) {
  // very forgiving: digits, spaces, +, -, (), .
  return /^[0-9+().\s-]{6,25}$/.test(phone);
}

function isValidIsoDate(dateStr: string) {
  // expecting yyyy-mm-dd from <input type="date">
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

function isTodayOrFuture(dateStr: string) {
  if (!isValidIsoDate(dateStr)) return false;
  const d = new Date(`${dateStr}T00:00:00.000Z`);
  if (Number.isNaN(d.getTime())) return false;
  const now = new Date();
  const todayUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  return d.getTime() >= todayUtc.getTime();
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const payload = (await req.json()) as Partial<ContactPayload>;

    const firstName = (payload.firstName ?? "").trim();
    const lastName = (payload.lastName ?? "").trim();
    const email = (payload.email ?? "").trim();
    const phone = (payload.phone ?? "").trim();
    const date = (payload.date ?? "").trim();
    const guests = (payload.guests ?? "").trim();
    const message = (payload.message ?? "").trim();

    const fieldErrors: Record<string, string> = {};

    if (!firstName) fieldErrors.firstName = "Voornaam is verplicht.";
    else if (!isValidName(firstName)) fieldErrors.firstName = "Voornaam lijkt niet geldig.";

    if (!lastName) fieldErrors.lastName = "Achternaam is verplicht.";
    else if (!isValidName(lastName)) fieldErrors.lastName = "Achternaam lijkt niet geldig.";

    if (!email) fieldErrors.email = "E-mailadres is verplicht.";
    else if (!isValidEmail(email)) fieldErrors.email = "E-mailadres lijkt niet geldig.";

    if (!date) fieldErrors.date = "Datum is verplicht.";
    else if (!isTodayOrFuture(date)) fieldErrors.date = "Datum moet vandaag of in de toekomst zijn.";

    if (phone && !isValidPhone(phone)) fieldErrors.phone = "Telefoonnummer lijkt niet geldig.";

    if (guests) {
      const n = Number(guests);
      if (!Number.isFinite(n) || !Number.isInteger(n)) fieldErrors.guests = "Aantal gasten moet een geheel getal zijn.";
      else if (n < 1 || n > 5000) fieldErrors.guests = "Aantal gasten moet tussen 1 en 5000 liggen.";
    }

    // If you want to enforce a minimum message length, do it here.
    if (message.length > 5000) fieldErrors.message = "Bericht is te lang (max 5000 tekens).";

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { ok: false, error: "validation_failed", fields: fieldErrors },
        { status: 400 }
      );
    }

    const makeUrl = process.env.MAKE_WEBHOOK_URL || DEFAULT_MAKE_WEBHOOK_URL;
    if (!makeUrl) {
      return NextResponse.json(
        { ok: false, error: "server_not_configured" },
        { status: 500 }
      );
    }

    const forwardBody = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      date,
      guests: guests || undefined,
      message: message || undefined,
      meta: {
        ip,
        userAgent: req.headers.get("user-agent") ?? undefined,
        submittedAt: new Date().toISOString(),
      },
    };

    const forwardRes = await fetch(makeUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(forwardBody),
    });

    if (!forwardRes.ok) {
      return NextResponse.json(
        { ok: false, error: "make_webhook_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}

