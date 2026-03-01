import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
 {
  title: '🤖 AgrisetAI – AI-Powered Smart Agriculture Ecosystem',
  duration: '2025 – Present',
  status: '🟢 Production Live | Actively Maintained',
  desc: 'Designed and deployed a production-grade AI-powered agricultural platform integrating a farmer-to-farmer equipment marketplace, CNN-based crop diagnostics, Razorpay-secured payments, digital wallet analytics, real-time market price monitoring, and multi-language accessibility within a unified full-stack architecture.',
  ss: '/mentalhealth1.jpg',
  tech: [
    'Python (Flask)',
    'MySQL',
    'JavaScript',
    'TensorFlow/Keras',
    'REST APIs',
    'Razorpay',
    'Railway',
    'Vercel'
  ],
  live: 'https://shetimitra-frontend.vercel.app/',
  code: 'https://github.com/Kuldip8975/shetimitra-frontend'
},
  
  {
  title: '🧠 AbhyasX - Smart Learning Ecosystem',
  desc: 'Your ultimate learning platform designed specifically for engineering students. Access a vast collection of handwritten notes and top-quality study materials, both free and paid, to boost your academic journey.',
  ss: '/mentalhealth.jpg',
  tech: ['NextJS', 'CSS', 'Javascript', 'Supabase','Rozorpay','Render','Clerk','APIs'],
  live: 'https://abhyasx-9zx6.onrender.com/courses',
  code: 'https://github.com/Kuldip8975/AbhyasX'
  },
  {
    title: '🤖 AI-EnviroScan India - (Infosys Springboot)',
    desc: 'EnviroScan is a sophisticated intelligent pollution monitoring system designed to revolutionize how environmental agencies and urban planners understand and respond to air pollution. Unlike traditional pollution monitoring systems that simply measure pollutant levels, EnviroScan goes several steps further by identifying the specific sources of air pollution with remarkable accuracy.',
    ss: '/ISL.png',
    tech: ['Python', 'OPENAPI', 'Machine Learning',],
    live: '#',
    code: 'https://github.com/EnviroScan-INF-SB/Kuldip_mahale_EnviroScan'
  },
  {
  title: '💼 SecureX — AI-Powered Document Verification System ',
  desc: 'Document forgery detection and automated verification have been discussed extensively in recent years. SecureX is an AI-powered document verification system that leverages advanced machine learning algorithms to authenticate and validate various types of documents, ensuring their integrity and legitimacy.',
  ss: '/portfolio.jpg',
  tech: ['Nextjs', 'IPCV', 'Tailwind CSS','MongoDB','Python','FastAPI','easyOCR','APIs'],
  live: '#',
  code: 'https://github.com/Kuldip8975/Sem_Project_V'
  },
  {
  title: '📊 Excel Sales Dashboard Project ',
  desc: 'This project involves creating an interactive sales dashboard using Microsoft Excel. The dashboard provides insights into sales performance, trends, and key metrics through the use of pivot tables, charts, and data visualization techniques. It allows users to analyze sales data effectively and make informed business decisions.',
  ss: '/portfolio1.jpg',
  tech: ['Microsoft Excel', 'Data Analysis', 'Pivot Tables', 'Pivot Charts', 'Interactive Slicers', 'Dashboard Visualization'],
  live: '#',
  code: 'https://github.com/Kuldip8975/Excel-Sales-Dashboard'
  },
   {
    title: '🩺TechCare - Doctor Appointment System',
    desc: 'A comprehensive web-based medical appointment system connecting patients with healthcare providers. The system facilitates appointment booking, lab test scheduling, ambulance services, and provides complete management dashboards for doctors and patients.',
    ss: '/mamo.png',
    tech: ['PHP', 'EmailJS', 'HTML', 'CSS','MySQL','JavaScript','PHPMYADMIN'],
    live: '#',
    code: 'https://github.com/Kuldip8975/TechCare/tree/main'
  },
  // {
  //   title: '💬 DocuChat – Gemini AI Chatbot',
  //   desc: 'An intelligent document interaction app powered by Gemini API that understands and answers queries from uploaded PDFs.',
  //   ss: '/Docuchat.png',
  //   tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
  //   live: 'https://docuchat-chatbot.streamlit.app/',
  //   code: 'https://github.com/kunj2803/Docuchat-Chatbot'
  // },
  // {
  //   title: '📊 ProfileX – Data Profiler',
  //   desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and visualization.',
  //   ss: '/ProfileX.png',
  //   tech: ['Streamlit', 'Pandas', 'Plotly'],
  //   live: 'https://profilex.streamlit.app/',
  //   code: 'https://github.com/kunjdesai/ProfileX'
  // },
  // {
  //   title: '🧬 Breast Cancer Prediction',
  //   desc: 'ML pipeline using SVC, Random Forest, and XGBoost with SMOTE for imbalanced dataset handling and model optimization.',
  //   ss: '/breastpred.jpg',
  //   tech: ['scikit-learn', 'XGBoost', 'Pandas'],
  //   live: '#',
  //   code: 'https://github.com/kunjdesai/BreastCancerPrediction'
  // }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>

  {/* Status Badge */}
  {p.status && (
    <div
      style={{
        display: 'inline-block',
        background: 'rgba(34,197,94,0.15)',
        color: '#22c55e',
        border: '1px solid rgba(34,197,94,0.4)',
        padding: '4px 10px',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 500,
        marginBottom: 8
      }}
    >
      {p.status}
    </div>
  )}

  <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>
    {p.title}
  </h3>

  <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>
    {p.desc}
  </p>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
