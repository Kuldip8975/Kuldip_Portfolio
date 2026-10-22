import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
  title: '🎓 NextPlace — Placement Management System for R.C. Patel Institute of Technology',
  duration: '2026 – Present',
  status: '🟡 In Development | Final Year Project',
  desc: 'A full-stack placement management platform built for R.C. Patel Institute of Technology, with role-based access for Students, Recruiters, TPO, and Admin. Students register, verify via OTP, complete profiles, and apply to placement drives; Recruiters post drives and review applicants; TPO manages student data, uploads bulk records, tracks placement analytics, and maintains a company-wise interview question bank. Includes a complete recruitment pipeline (applied → shortlisted → interview → selected/rejected) with real-time notifications via Socket.IO. Being developed for official adoption by the institute\'s Training & Placement Office.',
  ss: '/nextplace.png',
  tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.IO', 'JWT', 'OTP Verification'],
  live: 'https://rcpitcell.pages.dev/login',
  code: 'https://github.com/mihirtathe21-ship-it/rcpitcell'
},
{
  title: '🏭 FoundryOS AI — Manufacturing Intelligence & Workflow Automation Platform',
  duration: '2026',
  status: '🟢 Live Demo | Completed',
  desc: 'A role-based manufacturing intelligence platform that turns shop-floor records (downtime, output, rejects, inspections, maintenance) into live plant KPIs, AI-written shift reports, and human-approved maintenance workflows. Features a KPI dashboard (target achievement, first-pass yield, defect rates, downtime by machine), an AI shift-reporting engine that generates schema-validated reports grounded only in measured data with cited evidence, and a controlled workflow agent using allowlisted read-only tools — the AI only proposes actions, and a supervisor must approve each one. Includes four-role RBAC with per-machine scoping, hashed session tokens, account lockout, full audit trails, PDF export, and automated backend and frontend tests.',
  ss: '/foundryos.png',
  tech: ['React', 'Vite', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Google Gemini', 'Pytest', 'Vitest', 'Docker'],
  live: 'https://foundryos-egf.pages.dev/',
  code: 'https://github.com/Kuldip8975/foundryos-ai'
},
 {
  title: '🤖 HCPilot AI — AI-Powered CRM for Pharma Sales Reps',
  duration: '2026',
  status: '🟢 Production Live | Actively Maintained',
  desc: 'A multi-agent LLM system (LangGraph, 7 tools) for pharma sales reps to log HCP interactions via natural language chat — auto-classifies intent, extracts details, and creates records in real time. Features a RAG pipeline with per-user retrieval scoping, a rule-based priority-ranking engine with LLM-generated rationale, route-optimization (OSRM, 2-opt), and a standalone MCP server exposing CRM actions as JWT-authenticated tools.',
  ss: '/naukri-crm.jpg',
  tech: ['React', 'Redux', 'FastAPI', 'PostgreSQL', 'LangGraph', 'Groq LLM', 'Docker', 'AWS', 'MCP'],
  live: 'https://hcpilot-frontend.pages.dev/',
  code: 'https://github.com/Kuldip8975/naukri-crm-hcp'
},
{
  title: '🔎 QNIX – Enterprise AI Research & Discovery Agent',
  duration: '2026',
  status: '🟢 Production Live | Actively Maintained',
  desc: 'An enterprise AI research agent automating research from source collection to evidence-grounded conclusions via a multi-stage pipeline. Implements RAG with FAISS and Gemini Embedding 001 for semantic retrieval, with FastAPI REST APIs for source management, research jobs, and workspace-level data isolation. Integrates Groq GPT-OSS-20B for evidence-based analysis, finding extraction, and contradiction detection with source-cited conclusions.',
  ss: '/qnix.jpg',
  tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'FAISS', 'RAG', 'Gemini Embeddings', 'Groq', 'AWS', 'Cloudflare'],
  live: 'https://f8043484.qnix.pages.dev/',
  code: 'https://github.com/Kuldip8975/Qnix'
},
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
    live: 'https://enviroscanai.streamlit.app/',
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
  live: 'https://github.com/Kuldip8975/Excel-Sales-Dashboard',
  code: 'https://github.com/Kuldip8975/Excel-Sales-Dashboard'
  },
   {
    title: '🩺TechCare - Doctor Appointment System',
    desc: 'A comprehensive web-based medical appointment system connecting patients with healthcare providers. The system facilitates appointment booking, lab test scheduling, ambulance services, and provides complete management dashboards for doctors and patients.',
    ss: '/mamo.png',
    tech: ['PHP', 'EmailJS', 'HTML', 'CSS','MySQL','JavaScript','PHPMYADMIN'],
    live: 'https://github.com/Kuldip8975/TechCare',
    code: 'https://github.com/Kuldip8975/TechCare/tree/main'
  },
]

// Badge colour follows the status emoji: 🟢 green, 🟡 amber, 🔵 blue
function badgeColors(status) {
  if (status.includes('🟡')) return { bg: 'rgba(234,179,8,0.15)', fg: '#eab308', border: 'rgba(234,179,8,0.4)' }
  if (status.includes('🔵')) return { bg: 'rgba(59,130,246,0.15)', fg: '#3b82f6', border: 'rgba(59,130,246,0.4)' }
  return { bg: 'rgba(34,197,94,0.15)', fg: '#22c55e', border: 'rgba(34,197,94,0.4)' }
}

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
          {PROJECTS.map((p, idx) => {
            const hasLive = p.live && p.live !== '#'
            const badge = p.status ? badgeColors(p.status) : null
            return (
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
                {badge && (
                  <div
                    style={{
                      display: 'inline-block',
                      background: badge.bg,
                      color: badge.fg,
                      border: `1px solid ${badge.border}`,
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

                {/* Tech chips */}
                {p.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          color: '#67e8f9',
                          background: 'rgba(6,182,212,0.08)',
                          border: '1px solid rgba(6,182,212,0.25)',
                          padding: '2px 8px',
                          borderRadius: 12
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

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
                  {hasLive && (
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
                  )}
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}