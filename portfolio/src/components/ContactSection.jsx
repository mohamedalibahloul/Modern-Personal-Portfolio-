import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m2e2wpl",
        "template_mhilkme",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "4WRPRfq-cp2uHOokR"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("❌ Failed to send message. Try again!")
      );
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>mohamedalibahloul123@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>+216 24 563 833</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>Sousse, Tunisia</span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-lg mb-2">Connect With Me</h4>

              <a
                href="https://www.linkedin.com/in/mohamed-ali-bahloul-0843b2262"
                target="_blank"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Linkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-lg bg-background"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-lg bg-background"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-lg h-32 bg-background"
              required
            />

            <button type="submit" className="cosmic-button w-full">
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-primary mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
