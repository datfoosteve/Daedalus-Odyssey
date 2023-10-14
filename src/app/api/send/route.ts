import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
// import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

export async function POST(request) {
  try {
    const body = await request.json(); 
    console.log("body", body);
    const{email,name, message} = body;
    const data = await resend.emails.send({
      from: 'Stephen <stephen@stephenputhenpurackal.com>',
      to: email,
      subject: "This is STEPHEN PUTHENPURACKAL",
      react: EmailTemplate({ firstName: name },{email: email}) as React.ReactElement,
    });

    if(data.status === 'success') {
      return NextResponse.json({ message: 'Email Successfully Sent!' })
  }
  return NextResponse.json(data)
} catch (error) {
     console.log('error', error)
}

}