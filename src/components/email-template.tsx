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
  <div className="bg-gray-100 p-8 rounded-lg max-w-lg mx-auto my-8">
  <img src="https://stephenputhenpurackal.com/public/images/icon.png" alt="Website Logo" className="block mx-auto mb-6" />
  <h1 className="text-xl font-semibold mb-4 text-gray-800">Thank You, {firstName}!</h1>
  <p className="text-gray-700 mb-6">
    I&apos;ve received your message and appreciate you reaching out. I&apos;ll make sure to review your inquiry and get back to you as soon as possible. Looking forward to discussing how I can assist you with your web development needs!
  </p>
  <p className="text-gray-600 mb-2">Have a great day!</p>
  <p className="text-gray-600 mb-1">Warmest regards,</p>
  <p className="text-gray-600">Stephen</p>
</div>

);


export default EmailTemplate;
