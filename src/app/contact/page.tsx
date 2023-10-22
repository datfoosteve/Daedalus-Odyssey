"use client";

import Footer from "@/components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    // Handle the response, maybe show a success or error message
  };

  return (
    <motion.div
      className="p-8 bg-gray-100 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl mb-6 font-bold text-center text-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="mb-8 text-center text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Feel free to reach out to me through the form below:
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 border rounded shadow"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border rounded shadow"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Phone:</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded shadow"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Subject:</label>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border rounded shadow"
            value={formData.subject}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Message:</label>
          <textarea
            placeholder="Enter your message"
            rows={4}
            className="p-3 border rounded shadow resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileFocus={{ boxShadow: "0 0 8px 2px rgba(148, 0, 211, 0.3)" }}
          type="submit"
          className="w-full py-3 px-6 mt-8 mb-6 text-white font-semibold rounded transition duration-500 ease-in-out bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500"
        >
          Submit
        </motion.button>
      </motion.form>

      <Footer />
    </motion.div>
  );
};

export default ContactPage;
