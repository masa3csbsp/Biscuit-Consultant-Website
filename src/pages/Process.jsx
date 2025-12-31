import React from "react";
import { siteData } from "../data/siteContent";

const Process = () => {
  return (
    <>
      <main className="process">

        {/* HEADER */}
        <section className="process-header">
          <h1>Our Consulting Process</h1>
          <p>
            We follow a structured, practical, and result-oriented approach
            to ensure successful biscuit plant setup and optimization.
          </p>
        </section>

        {/* PROCESS STEPS */}
        <section className="process-steps">
          {siteData.processSteps.map((step, index) => (
            <div className="process-card" key={index}>

              {/* NUMBER + CONNECTOR */}
              <div className="step-indicator">
                <span className="step-number">{index + 1}</span>
                {index !== siteData.processSteps.length - 1 && (
                  <span className="step-line"></span>
                )}
              </div>

              <h3>{step}</h3>

              <p>
                {index === 0 &&
                  "We understand your business goals, budget, capacity requirements, and market needs."}
                {index === 1 &&
                  "We design plant layout, production flow, and capacity planning for optimal efficiency."}
                {index === 2 &&
                  "We assist in selecting reliable machinery and vendors suitable for your plant."}
                {index === 3 &&
                  "We supervise installation, trial runs, and initial production support."}
                {index === 4 &&
                  "We provide continued technical guidance and performance improvement support."}
              </p>
            </div>
          ))}
        </section>
        {/* BENEFITS */}
        <section className="process-benefits">
          <h2>Why Our Process Works</h2>
          <ul>
            <li>✔ Practical industry experience, not theory</li>
            <li>✔ Focus on cost control and productivity</li>
            <li>✔ Step-by-step clarity for clients</li>
            <li>✔ Reduced project risks and delays</li>
            <li>✔ Smooth transition to commercial production</li>
          </ul>
        </section>
      </main>
      {/* ================= STYLES ================= */}
      <style>{`
        .process section {
          padding: 80px 8%;
        }

        /* HEADER */
        .process-header {
          text-align: center;
          background: #f9f6f2;
        }

        .process-header h1 {
          font-size: 2.4rem;
          margin-bottom: 12px;
        }

        .process-header p {
          max-width: 760px;
          margin: auto;
          line-height: 1.6;
        }

        /* STEPS GRID */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px;
          margin-top: 60px;
          position: relative;
        }

        /* CARD */
        .process-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.15);
        }

        /* INDICATOR */
        .step-indicator {
          position: relative;
          margin-bottom: 20px;
        }

        .step-number {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #8b5a2b;
          color: white;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin: 0 auto;
          z-index: 2;
          position: relative;
        }

        /* HORIZONTAL CONNECTOR */
        .step-line {
          position: absolute;
          top: 50%;
          left: 100%;
          width: calc(100% + 32px);
          height: 3px;
          background: linear-gradient(
            to right,
            #8b5a2b 50%,
            #e4d6c8 50%
          );
          transform: translateY(-50%);
          z-index: 1;
        }

        .process-card h3 {
          margin-bottom: 10px;
          color: #8b5a2b;
          font-size: 1.05rem;
        }

        .process-card p {
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* BENEFITS */
        .process-benefits {
          background: #f9f6f2;
          text-align: center;
        }

        .process-benefits ul {
          list-style: none;
          padding: 0;
          margin-top: 24px;
        }

        .process-benefits li {
          margin-bottom: 12px;
          font-size: 1rem;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .process-steps {
            grid-template-columns: repeat(3, 1fr);
          }

          .step-line {
            display: none;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr;
          }

          .step-indicator {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .step-line {
            display: block;
            position: static;
            width: 3px;
            height: 40px;
            margin: 12px 0;
            background: #e4d6c8;
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default Process;
