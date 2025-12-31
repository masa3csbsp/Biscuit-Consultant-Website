import React from "react";
import { siteData } from "../data/siteContent";

const Services = () => {
  return (
    <>
      <main className="services">

        {/* IMAGE HEADER */}
        <section className="services-header image-header">
          <h1>Our Services</h1>
          <p>
            We provide end-to-end consulting support for biscuit manufacturing
            plants, from initial planning to full-scale production.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="services-list">
          <div className="services-grid">
            {siteData.services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUE SECTION */}
        <section className="services-extra">
          <h2>What You Get With Our Consulting</h2>
          <ul>
            <li>✔ Practical, industry-tested solutions</li>
            <li>✔ Cost-effective plant planning</li>
            <li>✔ Improved productivity & reduced wastage</li>
            <li>✔ Quality, safety & compliance assurance</li>
            <li>✔ End-to-end project guidance</li>
          </ul>
        </section>

      </main>

      {/* ================= STYLES ================= */}
      <style>{`
        /* ---------- GENERAL ---------- */
        .services section {
          padding: 80px 8%;
        }

        /* ---------- IMAGE HEADER ---------- */
        .image-header {
          background-image:
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url("/images/services-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          padding: 120px 8%;
        }

        .image-header h1 {
          font-size: 2.6rem;
          margin-bottom: 14px;
          color: #ffdd57;
        }

        .image-header p {
          max-width: 760px;
          margin: auto;
          font-size: 1.05rem;
          line-height: 1.6;
          color: #ffebc0ff;
        }

        /* ---------- SERVICES GRID ---------- */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 40px;
        }

        .service-card {
          background: white;
          padding: 32px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(180, 168, 62, 0.2);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }

        .service-card h3 {
          margin-bottom: 12px;
          color: #8b5a2b;
        }

        .service-card p {
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* ---------- HOVER + TOUCH EFFECT ---------- */
        .service-card:hover,
        .service-card:active {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 18px 45px rgba(0,0,0,0.15);
        }

        /* ---------- EXTRA SECTION ---------- */
        .services-extra {
          background: #f9f6f2;
          text-align: center;
        }

        .services-extra ul {
          list-style: none;
          padding: 0;
          margin-top: 24px;
        }

        .services-extra li {
          margin-bottom: 12px;
          font-size: 1rem;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 24px;
          }
        }

        /* ---------- MOBILE IMAGE HEADER ---------- */
        @media (max-width: 480px) {
          .image-header {
            padding: 80px 16px;
          }

          .image-header h1 {
            font-size: 1.7rem;
            line-height: 1.3;
          }

          .image-header p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
