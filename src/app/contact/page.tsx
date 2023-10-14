"use client";

import Footer from "@/components/Footer";
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    // Handle the response, maybe show a success or error message
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Contact Me</h1>
      <p className="mb-4">Feel free to reach out to me through the form below:</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-2 border rounded" 
            value={formData.name} 
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))} 
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 border rounded" 
            value={formData.email} 
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))} 
          />
        </div>

        
        <div>
          <label className="block mb-1">Phone:</label>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full p-2 border rounded" 
            value={formData.phone} 
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))} 
          />
        </div>

        <div>
          <label className="block mb-1">Subject:</label>
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full p-2 border rounded" 
            value={formData.subject} 
            onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))} 
          />
        </div>


        <div>
          <label className="block mb-1">Message:</label>
          <textarea 
            placeholder="Enter your message" 
            rows={4} 
            className="w-full p-2 border rounded" 
            value={formData.message} 
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))} 
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-700"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default ContactPage;