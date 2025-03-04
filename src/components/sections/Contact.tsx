import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import {useState} from "react";
import * as React from "react";

export const Contact = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
      alert(t("contact.error_1"));
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
    }).catch(() => alert(t("contact.error_2")));
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
        <div className="w-100 md:w-150 lg:w-150 p-6 rounded-2xl shadow-lg border">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center"
            style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
          >
            {t("contact.contact_me")}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="user_name"
                required
                value={formData.name}
                className="w-full border rounded px-4 py-3 transition focus:outline-none"
                style={{
                  backgroundColor: "var(--base-variant)", // Themed input background
                  borderColor: "var(--secondary-text)", // Themed border
                  color: "var(--text-color)", // Themed text color
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }}
                placeholder={t("contact.name")}
                onChange={handleChange}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border rounded px-4 py-3 transition focus:outline-none"
                style={{
                  backgroundColor: "var(--base-variant)",
                  borderColor: "var(--secondary-text)",
                  color: "var(--text-color)",
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }}
                placeholder="example@gmail.com"
                onChange={handleChange}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full border rounded px-4 py-3 transition focus:outline-none"
                style={{
                  backgroundColor: "var(--base-variant)",
                  borderColor: "var(--secondary-text)",
                  color: "var(--text-color)",
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }}
                placeholder={t("contact.message")}
                onChange={handleChange}
                onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded font-medium transition relative overflow-hidden cursor-pointer py-3 px-6 leading-tight"
              style={{
                backgroundColor: "var(--highlight-orange)", // Themed button background
                color: "var(--base-variant)", // Themed text color
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-color)";
                e.currentTarget.style.boxShadow = "0 0 15px var(--accent-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--highlight-orange)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}