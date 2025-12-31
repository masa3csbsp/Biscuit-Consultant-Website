import React, { useEffect, useState, useRef } from "react";
import { siteData } from "../data/siteContent";
import { Link } from "react-router-dom";
/* =========================
   HERO SLIDER IMAGES
========================= */
const sliderImages = [
  "/images/slider/biscuit1.jpg",
  "/images/slider/biscuit2.jpg",
  "/images/slider/biscuit3.jpg",
  "/images/slider/biscuit4.jpg",
  "/images/slider/biscuit5.jpg"
];

/* =========================
   COUNTER COMPONENT
========================= */
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const increment = end / (duration / 16);

          setCount(0);
          clearInterval(timer);

          timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        } else {
          clearInterval(timer);
          setCount(0);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [end]);

  return (
    <div className="counter" ref={ref}>
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};

/* =========================
   HOME PAGE
========================= */
const Home = () => {
  const [current, setCurrent] = useState(0);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="home">

        {/* ===== HERO SLIDER ===== */}
        <section className="hero-slider">

          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <button
            className="nav prev"
            onClick={() =>
              setCurrent((current - 1 + sliderImages.length) % sliderImages.length)
            }
          >
            ‹
          </button>

          <button
            className="nav next"
            onClick={() =>
              setCurrent((current + 1) % sliderImages.length)
            }
          >
            ›
          </button>

          <div className="dots">
            {sliderImages.map((_, i) => (
              <span
                key={i}
                className={i === current ? "dot active" : "dot"}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <div className="hero-overlay">
            <h1>{siteData.companyName}</h1>
            <p>
              Expert guidance for biscuit manufacturing plants with over{" "}
              {siteData.yearsOfExperience} years of industry experience.
            </p>
            <a href="/contact" className="btn primary">Get Consultation</a>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="intro">
          <h2>Trusted Biscuit Plant Consulting</h2>
          <p>{siteData.profileSummary}</p>
        </section>

        {/* ===== COUNTERS ===== */}
        <section className="counters">
          <Counter end={35} label="Years of Experience" />
          <Counter end={5} label="Countries Worked" />
          <Counter end={25} label="Biscuit Plants Supported" />
          <Counter end={100} label="Products Developed" />
        </section>

        {/* ===== EXPERTISE ===== */}
        <section className="expertise">
  <div className="expertise-header">
    <h2>What We Specialize In</h2>

    <Link to="/services" className="expertise-link">
      See All Services →
    </Link>
  </div>


  <div className="expertise-grid">
    {siteData.expertise.slice(0, 4).map((item, i) => (
      <div className="expertise-card" key={i}>
        <span className="icon">
          {["🏭", "⚙️", "🧪", "📊"][i]}
        </span>
        <p>{item}</p>
      </div>
    ))}

    {/* CTA CARD */}

  </div>
</section>


        {/* ===== PRODUCTS ===== */}
        <section className="products">
          <h2>Products & Categories Handled</h2>

          <div className="product-tags">
            {siteData.productExpertise.map((prod, i) => (
              <span key={i} className="tag">{prod}</span>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta">
          <h2>Plan Your Biscuit Plant With Confidence</h2>
          <p>Get expert consulting from concept to commercial production.</p>
          <a href="/contact" className="btn secondary">Contact Now</a>
        </section>

      </main>

      {/* =========================
         STYLES
      ========================= */}
      <style>{`
        /* HERO SLIDER */
        .hero-slider {
          position: relative;
          height: 90vh;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1.2s ease, transform 1.2s ease;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 16px;
          z-index: 2;
        }

        /* SLIDER CONTROLS */
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          font-size: 2rem;
          padding: 6px 14px;
          cursor: pointer;
          z-index: 3;
        }

        .nav.prev { left: 10px; }
        .nav.next { right: 10px; }

        .dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #bbb;
          border-radius: 50%;
          cursor: pointer;
        }

        .dot.active {
          background: white;
        }

        /* SECTIONS */
        .home section {
          padding: 80px 8%;
          text-align: center;
        }

        .intro {
          background: #f9f6f2;
        }

        /* COUNTERS */
        .counters {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .counter h3 {
          font-size: 2.2rem;
          color: #8b5a2b;
        }

        /* EXPERTISE */
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .expertise-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .expertise-card .icon {
          font-size: 2rem;
          margin-bottom: 12px;
          display: block;
        }
          .expertise-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.expertise-link {
  color: #8b5a2b;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.expertise-link:hover {
  transform: translateX(4px);
  color: #5f3b1b;
}


        /* PRODUCTS */
        .product-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 30px;
        }

        .tag {
          padding: 10px 16px;
          border-radius: 20px;
          background: #8b5a2b;
          color: white;
          font-size: 0.9rem;
        }

        /* CTA */
        .cta {
          background: #8b5a2b;
          color: white;
        }

        .btn {
          padding: 12px 22px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }

        .primary {
          background: #8b5a2b;
          color: white;
        }

        .secondary {
          background: white;
          color: #8b5a2b;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero-slider {
            height: 75vh;
          }

          .counters,
          .expertise-grid {
            grid-template-columns: 1fr;
          }
            /* CTA Card */
.expertise-cta {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  border: 2px dashed #8b5a2b;
  border-radius: 12px;
  text-decoration: none;
  color: #8b5a2b;
  font-weight: 600;
  transition: all 0.3s ease;
}

.expertise-cta .arrow {
  font-size: 3.5rem;
  margin-bottom: 8px;
}

.expertise-cta:hover {
  background: #92653bff;
  color: white;
  transform: translateY(-4px);
}

        }
      `}</style>
    </>
  );
};

export default Home;
