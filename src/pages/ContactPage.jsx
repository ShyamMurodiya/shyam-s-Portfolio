import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  // === Your EmailJS Keys ===
  const SERVICE_ID = "shyam_2004";
  const TEMPLATE_ID = "template_otnavhs";
  const PUBLIC_KEY = "ccaJAlffQJPIxKNS5";
  // =========================

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div
        className="
          w-full max-w-2xl
          bg-white/95 text-gray-900
          dark:bg-white/5 dark:text-white
          border border-gray-200 dark:border-white/10
          p-6 sm:p-8 md:p-10 rounded-2xl
          shadow-lg
        "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-center md:text-left">
          <span className="text-[var(--accent)]">Contact Me</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
          Fill the form below to send me a message.
        </p>

        {/* status */}
        {status === "success" && (
          <div className="mb-4 rounded-md p-3 bg-green-50 text-green-800 text-sm">
            ✓ Message sent — I will reply soon.
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 rounded-md p-3 bg-red-50 text-red-800 text-sm">
            ✖ Failed to send. Please try again or email me directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="
                w-full p-3 rounded-xl
                bg-white border border-gray-200 placeholder-gray-400 text-gray-900
                focus:ring-2 focus:ring-[var(--accent)] outline-none
                dark:bg-white/5 dark:border-white/10 dark:placeholder-gray-300 dark:text-white
                transition
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="
                w-full p-3 rounded-xl
                bg-white border border-gray-200 placeholder-gray-400 text-gray-900
                focus:ring-2 focus:ring-[var(--accent)] outline-none
                dark:bg-white/5 dark:border-white/10 dark:placeholder-gray-300 dark:text-white
                transition
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              rows={6}
              className="
                w-full p-3 rounded-xl
                bg-white border border-gray-200 placeholder-gray-400 text-gray-900
                focus:ring-2 focus:ring-[var(--accent)] outline-none resize-y
                dark:bg-white/5 dark:border-white/10 dark:placeholder-gray-300 dark:text-white
                transition
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 rounded-xl font-semibold
              bg-[var(--accent)] text-black
              ${loading ? "opacity-60 pointer-events-none" : "hover:opacity-95"}
              transition
            `}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}