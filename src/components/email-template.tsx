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
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>New Inquiry from {firstName}</h1>
    <p style={{ marginBottom: '10px' }}>You have received a new message via your contact form:</p>
    
    <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Subject: {subject}</h2>
    <p style={{ marginBottom: '10px' }}>Message: {message}</p>
    
    <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Contact Details</h2>
    <p style={{ marginBottom: '10px' }}>Email: {email}</p>
    <p style={{ marginBottom: '10px' }}>Phone: {phone}</p>
    
    <p style={{ marginTop: '20px', color: '#555' }}>Thank you for using our contact form,</p>
    <p style={{ color: '#555' }}>The Team</p>
  </div>
);


export default EmailTemplate;
