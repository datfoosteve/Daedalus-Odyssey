import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, phone, subject, message
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
 <img src="https://stephenputhenpurackal.com/public/images/icon.png" alt="Website Logo" style={{ display: 'block', margin: '0 auto', marginBottom: '20px' }} />
  <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Thank You, {firstName}!</h1>
    <p style={{ fontSize: '16px', marginBottom: '20px', color: '#555' }}>
      I've received your message and appreciate you reaching out. I'll make sure to review your inquiry and get back to you as soon as possible. Looking forward to discussing how I can assist you with your web development needs!
    </p>
    <p style={{ fontSize: '14px', color: '#777' }}>Have a great day!</p>
    <p style={{ fontSize: '14px', color: '#777', marginTop: '10px' }}>Warmest regards,</p>
    <p style={{ fontSize: '14px', color: '#777' }}>Stephen</p>
  </div>
);


export default EmailTemplate;
