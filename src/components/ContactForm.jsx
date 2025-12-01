import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import StatusAlert from "./StatusAlert";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name is required.";
    if (!formData.email.trim()) err.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Enter a valid email.";
    if (!formData.message.trim()) err.message = "Message cannot be empty.";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // honeypot — humans won't fill this hidden field
    if (formData.honey !== "") {
      console.warn("Spam detected.");
      return;
    }

    if (!validate()) return;

    setLoading(true);

    const params = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

      setLoading(false);
      setStatus("success");

      // auto hide success after 4s
      setTimeout(() => setStatus(null), 4000);

      setFormData({
        name: "",
        email: "",
        message: "",
        honey: "",
      });
    } catch (err) {
      console.error("EmailJS Error →", err);
      setLoading(false);
      setStatus("error");

      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <div
      className="
        bg-white/70 text-gray-900
        dark:bg-[#0b0f1a]/60 dark:text-gray-100
        border border-gray-200/60 dark:border-white/10
        p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl
        backdrop-blur-md transition
      "
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center md:text-left">
        <span className="text-blue-600 dark:text-blue-400">Contact Me</span>
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
        Fill the form below to send me a message.
      </p>

      {status === "success" && (
        <StatusAlert type="success">✓ Message sent — I will reply soon.</StatusAlert>
      )}

      {status === "error" && (
        <StatusAlert type="error">
          ✖ Something went wrong — please try again!
        </StatusAlert>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Honeypot (hidden anti-spam field) */}
        <input
          type="text"
          name="honey"
          value={formData.honey}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
        />

        <FormInput
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <FormInput
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <FormTextarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows={6}
          required
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-blue-500 to-indigo-500 text-white
            shadow-md transition transform
            ${loading ? "opacity-50 cursor-wait" : "hover:scale-[1.02]"}
          `}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}