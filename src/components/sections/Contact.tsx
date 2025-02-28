import {RevealOnScroll} from "../RevealOnScroll.tsx";
import emailjs from '@emailjs/browser';
import {useState} from "react";
import * as React from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
      alert("Email service is down, please try again later!");
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target as HTMLFormElement,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      alert("Message Sent!");
      setFormData({name: "", email: "", message: ""});
    }).catch(() => alert("Oops! Something went wrong. Please try again!"));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-1">
      <RevealOnScroll>
        <div className="w-100 md:w-150 lg:w-150 p-6 rounded-lg shadow-lg">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4cb946] to-[#dba070] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="relative">
              <input type="text"
                     id="name"
                     name="name"
                     required
                     value={formData.name}
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Name"
                     onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input type="email"
                     id="email"
                     name="email"
                     required
                     value={formData.email}
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="example@gmail.com"
                     onChange={handleChange}
              />
            </div>
            <div className="relative">
              <textarea id="message"
                        name="message"
                        required
                        value={formData.message}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="What should we collaborate on?"
                        onChange={handleChange}
              />
            </div>
            <button type="submit"
                    className="w-full bg-[#dd843c] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer">
              Send Message
            </button>
          </form>

        </div>
      </RevealOnScroll>

    </section>
  )
}