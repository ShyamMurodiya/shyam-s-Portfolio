import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <ContactForm />
      </div>
    </main>
  );
}