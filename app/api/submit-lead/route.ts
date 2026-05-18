import { NextRequest, NextResponse } from 'next/server';

function isValidIndianPhone(raw: string) {
  const cleaned = raw.replace(/[\s\-\(\)]/g, '').replace(/^\+91/, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

function isValidName(raw: string) {
  return raw.trim().length >= 2 && /^[a-zA-Z\s'.'-]+$/.test(raw.trim());
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name = '', phone = '', location = '', treatment = '' } = body;

  // ── Validation (filter layer) ──────────────────────────────
  if (!name.trim()) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
  }
  if (!isValidName(name)) {
    return NextResponse.json({ error: 'Name should contain letters only.' }, { status: 400 });
  }
  if (!phone.trim()) {
    return NextResponse.json({ error: 'Please enter your phone number.' }, { status: 400 });
  }
  if (!isValidIndianPhone(phone)) {
    return NextResponse.json(
      { error: 'Please enter a valid 10-digit Indian mobile number.' },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    // In dev/preview without env var, still return success so the flow works
    console.warn('GOOGLE_SHEETS_WEBHOOK_URL not set — skipping sheet write');
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name: name.trim(),
        phone: phone.trim().replace(/^\+91/, '').replace(/\s/g, ''),
        location: location.trim() || 'Not specified',
        treatment: treatment.trim() || 'Not specified',
        source: 'Website – Consultation Form',
      }),
    });

    if (!res.ok) throw new Error(`Sheet webhook returned ${res.status}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Google Sheets webhook error:', err);
    // Don't block the user — still show success even if sheet write fails
    return NextResponse.json({ success: true });
  }
}
