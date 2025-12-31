import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { siteData } from "../data/siteContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu & scroll to top on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">
            {siteData.companyName}
          </div>

          {/* LINKS */}
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><NavLink to="/" end className="nav-item">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-item">About</NavLink></li>
            <li><NavLink to="/services" className="nav-item">Services</NavLink></li>
            <li><NavLink to="/process" className="nav-item">Process</NavLink></li>
            <li><NavLink to="/contact" className="contact-btn">Contact</NavLink></li>
          </ul>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      {/* ================= STYLES ================= */}
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: auto;
          padding: 16px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: #8b5a2b;
        }

        .nav-links {
          display: flex;
          gap: 16px;
          list-style: none;
        }

        .nav-item {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 999px;
        }

        .nav-item.active {
          background: #e9dfd5;
          color: #8b5a2b;
          font-weight: 600;
        }

        .contact-btn {
          padding: 8px 18px;
          border-radius: 999px;
          background: #8b5a2b;
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          width: 30px;
          height: 22px;
          position: relative;
          cursor: pointer;
        }

        .hamburger span {
          position: absolute;
          height: 3px;
          width: 100%;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 9px;
        }

        .hamburger span:nth-child(3) {
          top: 18px;
        }

        /* OPEN STATE → X */
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 64px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            align-items: center;
            padding: 24px 0;
            gap: 20px;
            display: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          }

          .nav-links.open {
            display: flex;
          }

          .nav-item,
          .contact-btn {
            width: 90%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
