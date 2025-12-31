import React, { useState } from "react";
import emailjs from "emailjs-com";
import { siteData } from "../data/siteContent";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_jlhawcp",   // 🔴 replace
        "template_0kmhqbt",  // 🔴 replace
        e.target,
        "8Rzj_1nCaDoBO040i"    // 🔴 replace
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <>
      <main className="contact">

        {/* HEADER */}
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Get in touch with {siteData.consultantName} for professional biscuit
            plant consulting support.
          </p>
        </section>

        {/* CONTENT */}
        <section className="contact-content">

          {/* INFO */}
          <div className="contact-info">
            <h2>Consultation Details</h2>
            <p><strong>Phone:</strong> {siteData.phone}</p>
            <p><strong>Email:</strong> {siteData.email}</p>
            <p><strong>Location:</strong> {siteData.location}</p>
          </div>

          {/* FORM */}
          <div className="contact-form">
            <h2>Send an Inquiry</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <textarea
                name="message"
                placeholder="Your Requirement / Message"
                rows="4"
                required
              ></textarea>

              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>

            {status === "success" && (
              <p className="success">✅ Your inquiry has been sent successfully.</p>
            )}

            {status === "error" && (
              <p className="error">❌ Failed to send. Please try again.</p>
            )}
          </div>

        </section>
      </main>

      {/* ================= STYLES ================= */}
      <style>{`
        .contact section {
          padding: 80px 8%;
        }

        .contact-header {
          text-align: center;
          background: #f9f6f2;
        }

        .contact-header h1 {
          font-size: 2.4rem;
          margin-bottom: 12px;
        }

        .contact-header p {
          max-width: 720px;
          margin: auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info h2,
        .contact-form h2 {
          margin-bottom: 16px;
          color: #8b5a2b;
        }

        .contact-info p {
          margin-bottom: 10px;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        .contact-form button {
          padding: 12px;
          background: #8b5a2b;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .success {
          margin-top: 12px;
          color: green;
        }

        .error {
          margin-top: 12px;
          color: red;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
