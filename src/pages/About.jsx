import React from "react";
import { siteData } from "../data/siteContent";

const About = () => {
  return (
    <>
      <main className="about">

        {/* HEADER */}
        <section className="about-header">
          <h1>About the Consultant<br/>{siteData.consultantName}</h1>
          <p>
            Senior Biscuit Plant Consultant with over 35 years of hands-on experience
in biscuit and food manufacturing across India and international markets.

          </p>
        </section>

        {/* PROFILE SECTION */}
        <section className="about-profile">
          <div className="profile-image">
            <img
              src="/images/consultant.jpg"
              alt={siteData.consultantName}
            />
          </div>

          <div className="profile-content">
            <h2>Professional Summary</h2>
            <p>
              K. Sampath Kumar is a highly experienced biscuit plant consultant with over
35 years of expertise in the food manufacturing industry. He has played a
key role in the design, development, stabilization, and optimization of
biscuit manufacturing plants in India, Africa, and South Asia.
            </p>

            <p>
              His consulting approach is practical and result-oriented, focusing on
efficient plant operations, cost optimization, quality systems, and
sustainable production practices. With extensive exposure to greenfield
projects and large-scale manufacturing environments, he helps clients
build reliable, profitable, and scalable biscuit production facilities.
            </p>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="expertise">
          <h2>Core Areas of Expertise</h2>

          <ul className="expertise-list">
            {siteData.expertise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* EXPERIENCE HIGHLIGHTS */}
        <section className="experience">
          <h2>Experience Highlights</h2>

          <div className="experience-grid">
            <div className="exp-card">
              <h3>{siteData.yearsOfExperience}</h3>
              <p>Extensive experience in biscuit and food manufacturing across multiple
plants and product categories.</p>
            </div>

            <div className="exp-card">
              <h3>International Exposure</h3>
              <p>Professional experience across India, Cameroon, Ghana, Nigeria, and
Bangladesh, handling diverse plant environments.</p>
            </div>

            <div className="exp-card">
              <h3>End-to-End Expertise</h3>
              <p>Hands-on involvement from concept planning to commercial production and
ongoing performance improvement.</p>
            </div>
          </div>
          <p> With a deep understanding of biscuit processing, equipment behavior,
quality systems, and workforce management, K. Sampath Kumar provides
consulting solutions that are practical, reliable, and aligned with
real-world manufacturing challenges. His ability to combine technical
expertise with strong leadership and training skills makes him a trusted
partner for both new and existing biscuit manufacturers.
</p>
        </section>

      </main>

      {/* ✅ STYLES INSIDE JSX */}
      <style>{`
        .about section {
          padding: 80px 8%;
        }

        /* HEADER */
        .about-header {
          text-align: center;
          background: #f9f6f2;
        }

        .about-header h1 {
          font-size: 2.4rem;
          margin-bottom: 10px;
        }

        .about-header p {
          max-width: 720px;
          margin: auto;
          line-height: 1.6;
        }

        /* PROFILE */
        .about-profile {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .profile-image img {
          width: 100%;
          max-width: 360px;
          border-radius: 12px;
        }

        .profile-content h2 {
          margin-bottom: 12px;
        }

        .profile-content p {
          margin-bottom: 12px;
          line-height: 1.6;
        }

        /* EXPERTISE */
        .expertise {
          background: #ffffff;
        }

        .expertise-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
          list-style: none;
          padding: 0;
        }

        .expertise-list li {
          padding: 14px 18px;
          background: #f9f6f2;
          border-radius: 8px;
        }

        /* EXPERIENCE */
        .experience {
          background: #f9f6f2;
          text-align: center;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 30px;
        }

        .exp-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .exp-card h3 {
          font-size: 2rem;
          color: #8b5a2b;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .about-profile {
            flex-direction: column;
            text-align: center;
          }

          .expertise-list {
            grid-template-columns: 1fr;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default About;
