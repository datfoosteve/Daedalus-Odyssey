import Footer from "@/components/Footer";

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through the form below:</p>
      
      <form style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea placeholder="Enter your message" rows={4} style={{ width: '100%', padding: '10px', marginTop: '5px' }}></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 15px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      <Footer />
    </div>

  );
}

export default ContactPage;