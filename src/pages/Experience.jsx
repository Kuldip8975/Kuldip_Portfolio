import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Sept 2025 – Nov 2025",
    role: "AIML Intern",
    company: "Infosys Springboard",
    icon: "🤖",
    points: [
      "Developed EnviroScan – AI-powered pollution source identifier using geospatial analytics.",
      "Built ML models leveraging sensor data & weather patterns for pollution classification.",
      "Implemented heatmaps, hotspot detection & real-time environmental risk visualization."
    ]
  },
  {
    date: "Jun 2023 – Aug 2023",
    role: "Web Developer Intern",
    company: "anAccord Web World Pvt. Ltd.",
    icon: "💻",
    points: [
      "Designed and developed responsive UI using HTML, CSS, JavaScript & React.",
      "Collaborated on frontend modules and REST API integration.",
      "Followed modern workflows and component-based architecture."
    ]
  }
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  .exp-root {
    min-height: 100vh;
    padding: 6rem 1rem 4rem;
    background: #000;
    color: white;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Ambient background blobs */
  .exp-root::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(0,180,255,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
  .exp-root::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,255,224,0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .exp-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Header */
  .exp-header-wrap {
    text-align: center;
    margin-bottom: 5rem;
  }
  .exp-eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #00ffe0;
    opacity: 0.7;
    margin-bottom: 0.75rem;
  }
  .exp-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, #ffffff 0%, #00b4ff 50%, #00ffe0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }
  .exp-title-underline {
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #00b4ff, #00ffe0);
    margin: 1.2rem auto 0;
    border-radius: 2px;
    box-shadow: 0 0 12px #00ffe0;
  }

  /* Timeline */
  .timeline {
    position: relative;
    padding: 0;
  }
  .timeline-spine {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, transparent, #00b4ff 10%, #00ffe0 50%, #00b4ff 90%, transparent);
    box-shadow: 0 0 16px rgba(0,255,224,0.4);
  }

  .timeline-item {
    display: flex;
    width: 100%;
    margin-bottom: 3.5rem;
    position: relative;
  }
  .timeline-item.left {
    justify-content: flex-end;
    padding-right: calc(50% + 50px);
  }
  .timeline-item.right {
    justify-content: flex-start;
    padding-left: calc(50% + 50px);
  }

  /* Node dot */
  .timeline-node {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #000;
    border: 2px solid #00ffe0;
    box-shadow: 0 0 0 4px rgba(0,255,224,0.15), 0 0 20px rgba(0,255,224,0.5);
    z-index: 2;
  }
  .timeline-node::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00ffe0;
  }

  /* Card */
  .timeline-card {
    width: 100%;
    max-width: 420px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(0,255,224,0.12);
    border-radius: 20px;
    padding: 2rem 2.2rem;
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  }
  .timeline-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(0,180,255,0.04) 0%, transparent 60%);
    pointer-events: none;
  }
  .timeline-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 60px rgba(0,255,200,0.12), 0 0 0 1px rgba(0,255,224,0.25);
    border-color: rgba(0,255,224,0.3);
  }

  /* Card corner accent */
  .timeline-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle at top right, rgba(0,180,255,0.12), transparent 70%);
    border-radius: 0 20px 0 0;
    pointer-events: none;
  }

  .card-icon {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    display: block;
    filter: drop-shadow(0 0 8px rgba(0,255,224,0.5));
  }
  .card-date {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #00ffe0;
    opacity: 0.8;
    margin-bottom: 0.5rem;
    display: block;
  }
  .card-role {
    font-family: 'Syne', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 0.25rem;
    line-height: 1.2;
  }
  .card-company {
    font-size: 0.9rem;
    font-weight: 400;
    color: #00b4ff;
    margin: 0 0 1.2rem;
    font-style: italic;
  }
  .card-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(0,255,224,0.2), transparent);
    margin-bottom: 1.2rem;
  }
  .card-points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .card-points li {
    font-size: 0.875rem;
    color: rgba(255,255,255,0.72);
    line-height: 1.55;
    padding-left: 1.1rem;
    position: relative;
  }
  .card-points li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #00ffe0;
    font-size: 0.7rem;
    top: 2px;
  }

  /* Connector line from card to spine */
  .connector {
    position: absolute;
    top: 37px;
    height: 2px;
    background: linear-gradient(90deg, rgba(0,255,224,0.3), rgba(0,255,224,0.05));
    z-index: 1;
  }
  .timeline-item.left .connector {
    right: calc(50%);
    width: 50px;
  }
  .timeline-item.right .connector {
    left: calc(50%);
    width: 50px;
    background: linear-gradient(90deg, rgba(0,255,224,0.05), rgba(0,255,224,0.3));
  }

  /* Responsive */
  @media (max-width: 768px) {
    .timeline-spine {
      left: 22px;
    }
    .timeline-item.left,
    .timeline-item.right {
      justify-content: flex-start;
      padding-left: 55px;
      padding-right: 0;
    }
    .timeline-node {
      left: 22px;
    }
    .connector { display: none; }
    .timeline-card {
      max-width: 100%;
    }
  }
`;

const Experience = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="exp-root">
        <div className="exp-inner">

          {/* Header */}
          <motion.div
            className="exp-header-wrap"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="exp-eyebrow">Career Journey</p>
            <h2 className="exp-title">Experience</h2>
            <span className="exp-title-underline" />
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-spine" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="timeline-node" />
                <div className="connector" />

                <motion.div
                  className="timeline-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="card-icon">{exp.icon}</span>
                  <span className="card-date">{exp.date}</span>
                  <h3 className="card-role">{exp.role}</h3>
                  <p className="card-company">{exp.company}</p>
                  <div className="card-divider" />
                  <ul className="card-points">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.08 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;