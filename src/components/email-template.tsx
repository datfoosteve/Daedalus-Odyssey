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
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h2> Arlie has to pee pee </h2>
    <p> But you know how it goes, the work never stop and i just gotta keep on swimming dorry !</p>

    <p>Thanks,</p>
    <div> </div>

    <div> </div>
    <p> Your Subject: {subject} </p>
    <h3> Your message : {message} </h3>
    <h3> Your email : {email} </h3>
    <h3> Your phone : {phone} </h3>

  </div>
);

export default EmailTemplate;