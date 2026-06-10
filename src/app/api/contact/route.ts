import { NextResponse } from 'next/server';

const resendApiUrl = 'https://api.resend.com/emails';
const defaultFrom = 'Deeroi Website <info@deeroiconstructions.com>';
const defaultTo = 'deeroi.info@gmail.com';

function getText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fieldRow(label: string, value: string) {
  if (!value) return '';

  return `
    <tr>
      <td style="padding: 8px 0; color: #666; width: 140px;">${label}</td>
      <td style="padding: 8px 0; color: #111; font-weight: 600;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = getText(body.name);
    const email = getText(body.email);
    const phone = getText(body.phone);
    const projectType = getText(body.projectType);
    const budget = getText(body.budget);
    const timeline = getText(body.timeline);
    const message = getText(body.message);

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name is required (at least 2 characters).' },
        { status: 400 },
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message is required (at least 10 characters).' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.CONTACT_EMAIL_FROM || defaultFrom;
    const emailTo = process.env.CONTACT_EMAIL_TO || defaultTo;
    const requestType = projectType ? 'Quote' : 'Contact';
    const subject = `New ${requestType} Request from ${name}`;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'Email delivery is not configured yet.' },
        { status: 503 },
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
        <h2 style="margin: 0 0 16px;">${subject}</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          ${fieldRow('Name', name)}
          ${fieldRow('Email', email)}
          ${fieldRow('Phone', phone || 'Not provided')}
          ${fieldRow('Project Type', projectType)}
          ${fieldRow('Budget', budget)}
          ${fieldRow('Timeline', timeline)}
        </table>
        <div style="margin-top: 24px;">
          <p style="margin: 0 0 8px; color: #666;">Message</p>
          <div style="white-space: pre-wrap; padding: 16px; background: #f7f3ee; border: 1px solid #e5ded5; border-radius: 8px;">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    const response = await fetch(resendApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'deeroi-constructions-website',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [emailTo],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend email error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Email delivery failed. Please call us directly.' },
        { status: 502 },
      );
    }

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent.',
        id: result.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 },
    );
  }
}
