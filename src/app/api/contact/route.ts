import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required (at least 2 characters).' },
        { status: 400 },
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 },
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message is required (at least 10 characters).' },
        { status: 400 },
      );
    }

    // Log the submission (for development)
    console.log('──────────────────────────────────────');
    console.log('New contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', body.phone || '(not provided)');
    console.log('Project Type:', body.projectType || '(not provided)');
    console.log('Budget:', body.budget || '(not provided)');
    console.log('Timeline:', body.timeline || '(not provided)');
    console.log('Message:', message);
    console.log('──────────────────────────────────────');

    // TODO: Wire up Resend for email delivery
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'Deeroi Website <noreply@deeroiconstructions.com>',
    //   to: 'deeroi.info@gmail.com',
    //   subject: `New ${body.projectType ? 'Quote' : 'Contact'} Request from ${name}`,
    //   html: `
    //     <h2>New ${body.projectType ? 'Quote' : 'Contact'} Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
    //     ${body.projectType ? `<p><strong>Project Type:</strong> ${body.projectType}</p>` : ''}
    //     ${body.budget ? `<p><strong>Budget:</strong> ${body.budget}</p>` : ''}
    //     ${body.timeline ? `<p><strong>Timeline:</strong> ${body.timeline}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: 'Your message has been received.' },
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
