import {RevealOnScroll} from "../RevealOnScroll.tsx";
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import {useState, useRef, useEffect} from "react";
import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {SuccessModal} from "../SuccessModal.tsx";
import {ConfettiEffect} from "../ConfettiEffect.tsx";

export const Contact = () => {
  const {t} = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [captchaTheme, setCaptchaTheme] = useState<'light' | 'dark'>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  );

  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = (mutation.target as HTMLElement).classList.contains('darkmode');
          setCaptchaTheme(isDark ? 'dark' : 'light');
        }
      })
    })
    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert("Please complete the CAPTCHA!");
      return;
    }

    if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY || !form.current) {
      alert(t("contact.error_1"));
      return;
    }

    // Use emailjs.send instead of sendForm
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        user_name: formData.user_name,
        email: formData.email,
        message: formData.message,
        'g-recaptcha-response': recaptchaValue // EmailJS automatically recognizes this key
      },
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      setShowSuccess(true);
      setFormData({user_name: "", email: "", message: ""});
      recaptchaRef.current?.reset(); // Reset CAPTCHA after successful submission
    }).catch(() => alert(t("contact.error_2")));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-1 relative">
      <ConfettiEffect fire={showSuccess}/>
      <SuccessModal isOpen={showSuccess} onClose={handleCloseModal}/>

      <RevealOnScroll>
        <div className="w-100 md:w-150 lg:w-150 p-6 rounded-2xl ">

          <div
            className="absolute inset-0 z-0 rounded-xl"
            style={{
              backgroundColor: "var(--aero-color)",
              backdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
              WebkitBackdropFilter: 'blur(500px) saturate(100%) brightness(110%)',
            }}
          ></div>
          <div className="relative z-10">
            <h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center"
              style={{backgroundImage: "linear-gradient(to right, var(--accent-color), var(--highlight-orange))"}}
            >
              {t("contact.contact_me")}
            </h2>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>

              <div className="relative" style={{borderColor: "var(--secondary-text)"}}>
                <input type="text" id="name" name="user_name" required value={formData.user_name}
                       className="w-full border rounded px-4 py-3 transition focus:outline-none" style={{
                  backgroundColor: "var(--base-variant)",
                  borderColor: "var(--secondary-text)",
                  color: "var(--text-color)",
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }} placeholder={t("contact.name")} onChange={handleChange}
                       onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                       onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}/>
              </div>
              <div className="relative">
                <input type="email" id="email" name="email" required value={formData.email}
                       className="w-full border rounded px-4 py-3 transition focus:outline-none" style={{
                  backgroundColor: "var(--base-variant)",
                  borderColor: "var(--secondary-text)",
                  color: "var(--text-color)",
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }} placeholder="example@gmail.com" onChange={handleChange}
                       onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                       onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}/>
              </div>
              <div className="relative">
                <textarea id="message" name="message" required value={formData.message} rows={5}
                          className="w-full border rounded px-4 py-3 transition focus:outline-none" style={{
                  backgroundColor: "var(--base-variant)",
                  borderColor: "var(--secondary-text)",
                  color: "var(--text-color)",
                  transition: "border-color 0.3s ease-in-out, background 0.3s ease-in-out"
                }} placeholder={t("contact.message")} onChange={handleChange}
                          onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-color)"}
                          onBlur={(e) => e.currentTarget.style.borderColor = "var(--secondary-text)"}/>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  key={captchaTheme}
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA}
                  theme={captchaTheme}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded font-medium transition relative overflow-hidden cursor-pointer py-3 px-6 leading-tight"
                style={{
                  backgroundColor: "var(--highlight-orange)",
                  color: "var(--base-variant)",
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
        </div>
      </RevealOnScroll>
    </section>
  )
}