import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteContent";

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <h3>{siteData.companyName}</h3>
            <p>
              Professional consulting services for biscuit manufacturing
              plants, from planning to production.
            </p>
          </div>

          {/* QUICK LINKS 
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>*/}

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📞 {siteData.phone}</p>
            <p>✉️ {siteData.email}</p>
            <p>📍 {siteData.location}</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteData.companyName}. All rights reserved.
          </p>
        </div>

      </footer>

      {/* ✅ STYLES INSIDE JSX */}
      <style>{`
        .footer {
          background: #2f2f2f;
          color: #ddd;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 60px 8%;
        }

        .footer h3,
        .footer h4 {
          color: #ffffff;
          margin-bottom: 14px;
        }

        .footer p {
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #ddd;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-contact p {
          margin-bottom: 10px;
          font-size: 0.95rem;
        }

        .footer-bottom {
          border-top: 1px solid #444;
          text-align: center;
          padding: 16px;
          font-size: 0.9rem;
          background: #262626;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
