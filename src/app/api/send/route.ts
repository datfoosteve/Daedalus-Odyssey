import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, phone, subject, message } = body;
    const data = await resend.emails.send({
      from: 'Stephen<Stephen@stephenputhenpurackal.com>',
      to: email,
      subject: subject,
      react: EmailTemplate({ firstName: name, email, phone, subject, message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error });
  }
}
