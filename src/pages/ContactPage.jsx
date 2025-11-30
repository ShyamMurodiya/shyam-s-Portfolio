import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // === Your EmailJS Keys ===
  const SERVICE_ID = "shyam_2004";
  const TEMPLATE_ID = "template_otnavhs";
  const PUBLIC_KEY = "ccaJAlffQJPIxKNS5";
  // =========================

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        alert("Message sent successfully! Check your email.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Check console.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 mt-24">
      <div
        className="
          max-w-2xl w-full 
          bg-white/5 
          backdrop-blur-xl 
          border border-white/10 
          p-10 rounded-2xl 
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        "
      >
        <h1 className="text-4xl font-bold mb-4 text-[var(--accent)]">
          Contact Me
        </h1>
        <p className="text-gray-300 mb-8">
          Fill the form below to send me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block mb-1 text-gray-200">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 
              text-white focus:border-[var(--accent)] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-200">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 
              text-white focus:border-[var(--accent)] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-200">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-32 rounded-xl bg-white/5 border border-white/10 
              text-white focus:border-[var(--accent)] outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-3 font-bold bg-[var(--accent)] text-black 
            rounded-xl transition 
            ${loading ? "opacity-60 pointer-events-none" : "hover:opacity-90"}`}
          >
            {loading ? "Sending…" : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;