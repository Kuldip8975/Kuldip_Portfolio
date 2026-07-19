import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 KULDIP K. MAHALE
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              AI/ML Engineer | B.Tech — AI & Machine Learning, RCPIT
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Shirpur, Dhule, Maharashtra
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ kuldipmahale2001@gmail.com | 📞 +91 9890371852
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              I'm an AI/ML Engineer with hands-on experience building machine learning
              pipelines, AI-driven backend systems, and intelligent web applications.
              Skilled in Python, Generative AI, backend engineering, and scalable software
              development, with a strong focus on solving real-world problems. Currently
              pursuing a B.Tech in Artificial Intelligence & Machine Learning at R.C. Patel
              Institute of Technology (CGPA: 8.24), after completing a Diploma in Computer
              Engineering with 86.71%.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Artificial Intelligence & Machine Learning</strong> — R.C.
              Patel Institute of Technology, Shirpur, 2024–2027 <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.24</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Diploma – Computer Engineering</strong> — R.C. Patel Polytechnic,
              Shirpur, 2021–2023 <br />
              <span style={{ color: "#aaa" }}>Percentage: 86.71%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — EMVS High School</strong> (Maharashtra Board, 2021) <br />
              <span style={{ color: "#aaa" }}>Percentage: 84%</span>
            </li>
          </ul>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💻 Work Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>🛡️ AI & Cybersecurity Engineering Intern</strong> — Astraeus Next Gen
              Pvt. Ltd. (Remote) <br />
              <span style={{ color: "#aaa" }}>May 2026 – Aug 2026</span>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#ccc" }}>
                Contributed to autonomous AI systems, cybersecurity engineering (threat
                analysis, spyware detection), and full-stack integration of secure
                AI-focused web applications.
              </p>
            </li>
            <li style={{ marginTop: 16 }}>
              <strong>🤖 AI/ML Intern</strong> — Infosys Springboard <br />
              <span style={{ color: "#aaa" }}>Sept 2025 – Nov 2025</span>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#ccc" }}>
                Built an end-to-end pollution classification system (XGBoost & Random
                Forest, 90% F1-score) with live API ingestion and Streamlit deployment, as
                part of a 10-member Agile cohort.
              </p>
            </li>
            <li style={{ marginTop: 16 }}>
              <strong>🌐 Web Developer Intern</strong> — anAccord Web World Pvt. Ltd. <br />
              <span style={{ color: "#aaa" }}>Jun 2023 – Aug 2023</span>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "#ccc" }}>
                Developed responsive UI components with HTML5, CSS3, JavaScript, and
                React.js, and integrated REST APIs connecting frontend to backend services.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ AI-First CRM – HCP Module (React, FastAPI, PostgreSQL, LangGraph, Groq)</li>
            <li>2️⃣ CleanD AI – Automated Dataset Profiler & Preprocessor</li>
            <li>3️⃣ EnviroScan – AI-Powered Pollution Source Classifier</li>
            <li>4️⃣ TechCareX – Doctor Appointment System</li>
            <li>5️⃣ SecureX – AI Powered Document Verification System</li>
            <li>6️⃣ AbhyasX – Smart Learning Ecosystem</li>
            <li>7️⃣ Sales Dashboard in Excel</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "JavaScript",
              "SQL",
              "C",
              "Java",
              "React.js",
              "Redux Toolkit",
              "Next.js",
              "HTML5",
              "CSS3",
              "FastAPI",
              "REST APIs",
              "LangGraph",
              "Generative AI",
              "NLP",
              "Computer Vision",
              "OpenCV",
              "YOLO",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "TensorFlow",
              "PyTorch",
              "XGBoost",
              "Random Forest",
              "Data Analysis",
              "Streamlit",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Supabase",
              "Git",
              "GitHub",
              "Power BI",
              "Excel",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            📜 Certifications
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              🏅 Generative AI with Large Language Models — DeepLearning.AI & AWS
              (Coursera)
            </li>
            <li style={{ marginTop: 6 }}>
              🏅 Microsoft Certified: Power BI Data Analyst Associate — NASSCOM
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 Codechef", link: "https://www.codechef.com/users/kuldip_962338" },
            { name: "💻 GitHub", link: "https://github.com/Kuldip8975" },
            {
              name: "💼 LinkedIn",
              link: "https://www.linkedin.com/in/kuldip-mahale-ab3a45240/?originalSubdomain=in",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#111",
          }}
        >
          <object
            data="/kuldip_mahale.pdf"
            type="application/pdf"
            width="100%"
            height="650px"
          >
            <p style={{ padding: "20px", color: "#4e3f3f" }}>
              PDF preview not supported.{" "}
              <a
                href="/kuldip_mahale.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00b4ff", marginLeft: 6 }}
              >
                Click here to download.
              </a>
            </p>
          </object>
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/kuldip_mahale.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "linear-gradient(90deg,#00b4ff,#00ffe0)",
            color: "#000",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}