"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const skills: Record<string, string[]> = {
    Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST API Design", "CRUD Operations"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Vercel", "Prisma ORM", "MySQL"],
    Architecture: ["MVC Architecture", "RESTful APIs", "Responsive Web Design", "Agile Development"],
  };

  const projects = [
    {
      icon: "🏨",
      title: "Hotel Booking App",
      description: "Full-stack hotel booking & room management system with admin dashboard, room availability tracking, complete booking workflow, and role-based access controls.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/danish9670/hotel-booking-MERN",
      live: null as string | null,
    },
    {
      icon: "🛋️",
      title: "RentEase",
      description: "Furniture & appliance rental platform for students and working professionals with JWT-based authentication, product listings, and cart functionality.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/danish9670/Rentease.dr",
      live: "https://rentease-opal-omega.vercel.app" as string | null,
    },
    {
      icon: "📋",
      title: "Notice Board App",
      description: "Full-stack CRUD app with priority-based sorting (Urgent/Normal), server-side validation, RESTful API routes, and TiDB Cloud hosted database. Deployed on Vercel.",
      tech: ["Next.js", "Prisma ORM", "MySQL", "Tailwind CSS", "Vercel"],
      github: "https://github.com/danish9670/notice-board",
      live: "https://notice-board-eight-chi.vercel.app/" as string | null,
    },
    {
      icon: "🛍️",
      title: "Livestream Shopping",
      description: "Real-time collaborative e-commerce platform enabling group livestream shopping experiences with event-driven backend and real-time data synchronization.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Real-Time"],
      github: "https://github.com/danish9670/livetogether_shopping_website",
      live: null as string | null,
    },
    {
      icon: "🤖",
      title: "Personal AI Assistant",
      description: "Final Year B.Tech Project — AI-powered web assistant with natural language interaction, AI API integration, and full-stack JavaScript architecture.",
      tech: ["React.js", "Node.js", "Express.js", "AI API Integration"],
      github: "https://github.com/danish9670/eldercare",
      live: null as string | null,
      badge: "Final Year Project",
    },
    {
      icon: "👴",
      title: "ElderEaseCare",
      description: "Home healthcare platform connecting families with verified nurses and caregivers across India. Full-stack MERN implementation with caregiver verification.",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/danish9670/eldercare",
      live: null as string | null,
    },
  ];

  const certifications = [
    { title: "MERN Stack Development & DSA", org: "ShapeMySkills by Ducat, Noida", detail: "90-Hour Training · Jul–Aug 2025" },
    { title: "Node.js RESTful API Bootcamp", org: "DevTown × Google Developer Groups, VIT-AP", detail: "Aug 2025" },
    { title: "Node.js RESTful API Bootcamp", org: "DevTown × Microsoft Student Chapter, MSIT", detail: "Aug 2025" },
    { title: "Tailwind CSS Bootcamp", org: "Devtown", detail: "2025" },
    { title: "Generative AI Mastermind", org: "Outskill", detail: "Certificate of Completion" },
    { title: "Soft Skills Program", org: "Learnovate Enterprises & BBD University", detail: "Apr 2026 · Certificate of Appreciation" },
    { title: "Technical Workshop", org: "GeeksforGeeks", detail: "" },
    { title: "C Programming Fundamentals", org: "Mindluster", detail: "2023" },
    { title: "Software Development Workshop", org: "Softpro India", detail: "2023" },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0a0a0f; --surface: #111118; --surface2: #16161f;
      --border: rgba(255,255,255,0.07); --accent: #00d4aa; --accent2: #7c6cff;
      --text: #e8e8f0; --muted: #7a7a8c;
      --font-head: 'Syne', sans-serif; --font-body: 'DM Sans', sans-serif;
    }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 16px; line-height: 1.65; overflow-x: hidden; }

    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between; transition: background 0.3s; }
    nav.scrolled { background: rgba(10,10,15,0.88); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-logo { font-family: var(--font-head); font-weight: 800; font-size: 1.15rem; letter-spacing: -0.02em; color: var(--text); text-decoration: none; }
    .nav-logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { font-size: 0.875rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover, .nav-links a.active { color: var(--text); }
    .nav-cta { background: var(--accent); color: #000; font-family: var(--font-head); font-weight: 700; font-size: 0.8rem; padding: 0.45rem 1.1rem; border-radius: 6px; text-decoration: none; transition: opacity 0.2s; }
    .nav-cta:hover { opacity: 0.85; }
    .nav-mobile-btn { display: none; background: none; border: 1px solid var(--border); color: var(--text); width: 38px; height: 38px; border-radius: 8px; cursor: pointer; font-size: 1.1rem; align-items: center; justify-content: center; }
    .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; background: rgba(10,10,15,0.97); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 1.5rem 2rem; z-index: 99; flex-direction: column; gap: 1.25rem; }
    .mobile-menu.open { display: flex; }
    .mobile-menu a { color: var(--text); text-decoration: none; font-family: var(--font-head); font-weight: 600; font-size: 1.1rem; }

    .hero { min-height: 100vh; display: flex; align-items: center; padding: 7rem 2rem 4rem; position: relative; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0,212,170,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 20% 70%, rgba(124,108,255,0.07) 0%, transparent 70%); pointer-events: none; }
    .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .hero-inner { max-width: 1100px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center; position: relative; z-index: 1; }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.25); color: var(--accent); font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.85rem; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.5rem; }
    .hero-badge::before { content: ''; width: 7px; height: 7px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
    .hero h1 { font-family: var(--font-head); font-size: clamp(2.8rem, 6vw, 5rem); font-weight: 800; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 1rem; }
    .hero h1 .accent { color: var(--accent); }
    .hero-sub { font-size: 1.1rem; color: var(--muted); margin-bottom: 2rem; max-width: 480px; line-height: 1.7; }
    .hero-sub strong { color: var(--text); font-weight: 500; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
    .btn-primary { background: var(--accent); color: #000; font-family: var(--font-head); font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; transition: opacity 0.2s, transform 0.2s; }
    .btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }
    .btn-secondary { background: transparent; color: var(--text); font-family: var(--font-head); font-weight: 600; font-size: 0.9rem; padding: 0.75rem 1.75rem; border-radius: 8px; text-decoration: none; border: 1px solid var(--border); transition: border-color 0.2s, transform 0.2s; }
    .btn-secondary:hover { border-color: rgba(255,255,255,0.25); transform: translateY(-1px); }
    .hero-socials { display: flex; gap: 0.75rem; }
    .social-link { display: flex; align-items: center; gap: 0.5rem; color: var(--muted); font-size: 0.85rem; font-weight: 500; text-decoration: none; padding: 0.45rem 1rem; border: 1px solid var(--border); border-radius: 8px; transition: color 0.2s, border-color 0.2s; }
    .social-link:hover { color: var(--text); border-color: rgba(255,255,255,0.2); }

    .photo-wrap { flex-shrink: 0; position: relative; width: 260px; }
    .photo-glow { position: absolute; inset: -20px; border-radius: 50%; background: radial-gradient(circle, rgba(0,212,170,0.18) 0%, transparent 70%); pointer-events: none; animation: glow-pulse 3s ease-in-out infinite; }
    @keyframes glow-pulse { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
    .photo-ring { width: 260px; height: 260px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, #00d4aa, #7c6cff); position: relative; z-index: 1; }
    .photo-inner { width: 100%; height: 100%; border-radius: 50%; overflow: hidden; background: var(--surface2); border: 3px solid var(--bg); }
    .photo-inner img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
    .photo-badge { position: absolute; bottom: 10px; right: -10px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 0.45rem 0.85rem; display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 600; color: var(--text); z-index: 2; white-space: nowrap; }
    .photo-badge-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; display: inline-block; animation: pulse 2s infinite; }

    .hero-stats { display: flex; gap: 2.5rem; margin-top: 1.5rem; }
    .stat-num { font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; color: var(--text); line-height: 1; }
    .stat-num span { color: var(--accent); }
    .stat-label { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.04em; text-transform: uppercase; margin-top: 0.2rem; }

    section { padding: 5rem 2rem; max-width: 1100px; margin: 0 auto; }
    .fw { padding: 5rem 2rem; background: var(--surface); }
    .fw-inner { max-width: 1100px; margin: 0 auto; }
    .section-tag { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--accent); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.75rem; }
    .section-tag::before { content: ''; width: 20px; height: 2px; background: var(--accent); border-radius: 2px; }
    .section-title { font-family: var(--font-head); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1rem; }
    .section-desc { color: var(--muted); max-width: 540px; margin-bottom: 3rem; line-height: 1.7; }

    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
    .about-text p { color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
    .about-text p strong { color: var(--text); font-weight: 500; }
    .acard { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 1.75rem; margin-bottom: 1rem; }
    .acard-title { font-family: var(--font-head); font-weight: 700; font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
    .edu-deg { font-family: var(--font-head); font-weight: 700; font-size: 0.95rem; color: var(--text); }
    .edu-sch { font-size: 0.85rem; color: var(--muted); margin-top: 0.25rem; }
    .edu-meta { display: flex; gap: 0.75rem; margin-top: 0.6rem; flex-wrap: wrap; }
    .edu-chip { background: rgba(0,212,170,0.1); color: var(--accent); font-size: 0.78rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 6px; }
    .comps { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem; }
    .comp { background: var(--surface2); border: 1px solid var(--border); color: var(--muted); font-size: 0.8rem; padding: 0.3rem 0.7rem; border-radius: 6px; }

    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .skill-cat { background: var(--surface2); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; }
    .skill-cat-title { font-family: var(--font-head); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .skill-tag { background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text); font-size: 0.82rem; font-weight: 500; padding: 0.35rem 0.75rem; border-radius: 7px; transition: border-color 0.2s, color 0.2s; cursor: default; }
    .skill-tag:hover { border-color: rgba(0,212,170,0.4); color: var(--accent); }

    .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
    .proj-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; transition: border-color 0.25s, transform 0.25s; position: relative; }
    .proj-card:hover { border-color: rgba(0,212,170,0.25); transform: translateY(-3px); }
    .proj-badge { position: absolute; top: 1rem; right: 1rem; background: rgba(124,108,255,0.15); border: 1px solid rgba(124,108,255,0.3); color: #a89fff; font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 5px; }
    .proj-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
    .proj-title { font-family: var(--font-head); font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 0.5rem; }
    .proj-desc { font-size: 0.84rem; color: var(--muted); line-height: 1.65; flex: 1; margin-bottom: 1rem; }
    .proj-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
    .tech-chip { background: var(--surface2); color: var(--muted); font-size: 0.72rem; font-weight: 600; padding: 0.25rem 0.6rem; border-radius: 5px; }
    .proj-links { display: flex; gap: 0.75rem; }
    .plink { font-size: 0.8rem; font-weight: 600; color: var(--accent); text-decoration: none; transition: opacity 0.2s; }
    .plink:hover { opacity: 0.7; }
    .plink.ghost { color: var(--muted); }

    .certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .cert-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; display: flex; gap: 0.85rem; align-items: flex-start; transition: border-color 0.2s; }
    .cert-card:hover { border-color: rgba(0,212,170,0.2); }
    .cert-check { width: 22px; height: 22px; background: rgba(0,212,170,0.15); border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; font-size: 0.7rem; color: var(--accent); font-weight: 700; }
    .cert-title { font-family: var(--font-head); font-weight: 700; font-size: 0.88rem; color: var(--text); margin-bottom: 0.25rem; line-height: 1.3; }
    .cert-org { font-size: 0.78rem; color: var(--muted); line-height: 1.4; }
    .cert-detail { font-size: 0.72rem; color: var(--accent); margin-top: 0.2rem; font-weight: 500; }

    .contact-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; position: relative; overflow: hidden; }
    .contact-wrap::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%); pointer-events: none; }
    .contact-info h3 { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
    .contact-info p { color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }
    .contact-items { display: flex; flex-direction: column; gap: 0.75rem; }
    .ci { display: flex; align-items: center; gap: 0.75rem; color: var(--muted); font-size: 0.9rem; text-decoration: none; transition: color 0.2s; }
    .ci:hover { color: var(--text); }
    .ci-icon { width: 36px; height: 36px; background: var(--surface2); border: 1px solid var(--border); border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
    .contact-ctas { display: flex; flex-direction: column; gap: 0.85rem; }
    .ccta { display: flex; align-items: center; gap: 0.75rem; padding: 1.1rem 1.5rem; border-radius: 12px; text-decoration: none; font-family: var(--font-head); font-weight: 700; font-size: 0.9rem; transition: opacity 0.2s, transform 0.2s; }
    .ccta:hover { opacity: 0.85; transform: translateX(4px); }
    .ccta.primary { background: var(--accent); color: #000; }
    .ccta.secondary { background: var(--surface2); border: 1px solid var(--border); color: var(--text); }

    footer { border-top: 1px solid var(--border); padding: 2rem; text-align: center; color: var(--muted); font-size: 0.82rem; }
    footer span { color: var(--accent); }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; text-align: center; }
      .hero-btns, .hero-socials, .hero-stats { justify-content: center; }
      .photo-wrap { display: none; }
      .about-grid, .contact-wrap { grid-template-columns: 1fr; }
      .proj-grid, .certs-grid { grid-template-columns: repeat(2, 1fr); }
      .skills-grid { grid-template-columns: 1fr; }
      .nav-links, .nav-cta { display: none; }
      .nav-mobile-btn { display: flex; }
    }
    @media (max-width: 580px) {
      .proj-grid, .certs-grid { grid-template-columns: 1fr; }
      section, .fw { padding: 3.5rem 1.25rem; }
      .contact-wrap { padding: 2rem 1.5rem; }
    }
  `;

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#home" className="nav-logo">Danish<span>.</span></a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={activeSection === l.href.slice(1) ? "active" : ""}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:danishraza.stjic@gmail.com" className="nav-cta">Hire Me</a>
        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="mailto:danishraza.stjic@gmail.com" style={{ color: "var(--accent)" }}>Hire Me →</a>
      </div>

      {/* HERO */}
      <div id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div>
            <div className="hero-badge">Open to Full-time Roles</div>
            <h1>Hi, I&apos;m<br /><span className="accent">Danish Raza</span></h1>
            <p className="hero-sub">
              <strong>Full Stack Developer (MERN)</strong> — building scalable, responsive web apps from database to UI.
              Final-year B.Tech CSE student based in <strong>Lucknow, India</strong>.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/danish9670" target="_blank" rel="noreferrer" className="social-link">⌥ GitHub</a>
              <a href="https://www.linkedin.com/in/danish-raza-17383332b" target="_blank" rel="noreferrer" className="social-link">💼 LinkedIn</a>
              <a href="mailto:danishraza.stjic@gmail.com" className="social-link">📧 Email</a>
            </div>
            <div className="hero-stats">
              <div><div className="stat-num">8<span>+</span></div><div className="stat-label">Projects Built</div></div>
              <div><div className="stat-num">9<span>+</span></div><div className="stat-label">Certifications</div></div>
              <div><div className="stat-num">7.89</div><div className="stat-label">SGPA / 10.0</div></div>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="photo-wrap">
            <div className="photo-glow" />
            <div className="photo-ring">
              <div className="photo-inner">
                <Image
                  src="/danish.jpeg"
                  alt="Danish Raza"
                  width={260}
                  height={260}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
            <div className="photo-badge">
              <span className="photo-badge-dot" />
              Available for hire
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-tag">About</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I&apos;m a <strong>results-driven Full Stack Developer</strong> specializing in the MERN Stack, with hands-on experience designing and deploying scalable, responsive web applications end-to-end.</p>
            <p>Proficient in <strong>React.js, Node.js, Express.js, and MongoDB</strong> with strong expertise in RESTful API development, MVC architecture, and modern UI/UX design.</p>
            <p>Currently building <strong>ElderEaseCare</strong> — a home healthcare platform connecting families with verified nurses and caregivers across India. Seeking an entry-level Full Stack Developer role to contribute to high-impact engineering teams.</p>
          </div>
          <div>
            <div className="acard">
              <div className="acard-title">Education</div>
              <div className="edu-deg">B.Tech – Computer Science &amp; Engineering</div>
              <div className="edu-sch">BBD Northern India Institute of Technology, Lucknow · 2022–2026</div>
              <div className="edu-meta">
                <span className="edu-chip">SGPA 7.89 / 10.0</span>
                <span className="edu-chip">7th Semester</span>
              </div>
            </div>
            <div className="acard">
              <div className="acard-title">Core Competencies</div>
              <div className="comps">
                {["Communication", "Team Leadership", "Adaptability", "Discipline", "Punctuality", "Problem Solving"].map((c) => (
                  <span key={c} className="comp">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div className="fw" id="skills">
        <div className="fw-inner">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-desc">Technologies and tools I work with to build production-ready applications.</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="skill-cat">
                <div className="skill-cat-title">{cat}</div>
                <div className="skill-tags">
                  {items.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-desc">Real-world applications built from scratch — from database design to frontend deployment.</p>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.title} className="proj-card">
              {"badge" in p && p.badge && <span className="proj-badge">{p.badge}</span>}
              <div className="proj-icon">{p.icon}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tech">{p.tech.map((t) => <span key={t} className="tech-chip">{t}</span>)}</div>
              <div className="proj-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="plink">GitHub →</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="plink ghost">Live Demo →</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <div className="fw" id="certifications">
        <div className="fw-inner">
          <div className="section-tag">Certifications</div>
          <h2 className="section-title">Credentials</h2>
          <p className="section-desc">Verified certificates from industry bootcamps, workshops, and training programs.</p>
          <div className="certs-grid">
            {certifications.map((c) => (
              <div key={c.title + c.org} className="cert-card">
                <div className="cert-check">✓</div>
                <div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-org">{c.org}</div>
                  {c.detail && <div className="cert-detail">{c.detail}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Open for Opportunities</h3>
            <p>Available for full-time roles, freelance projects, and collaborations. Let&apos;s build something great together.</p>
            <div className="contact-items">
              <a href="mailto:danishraza.stjic@gmail.com" className="ci"><span className="ci-icon">📧</span>danishraza.stjic@gmail.com</a>
              <a href="tel:+919670393243" className="ci"><span className="ci-icon">📱</span>+91 96703 93243</a>
              <span className="ci"><span className="ci-icon">📍</span>Lucknow, India</span>
            </div>
          </div>
          <div className="contact-ctas">
            <a href="mailto:danishraza.stjic@gmail.com" className="ccta primary">📧 Send me an Email</a>
            <a href="https://www.linkedin.com/in/danish-raza-17383332b" target="_blank" rel="noreferrer" className="ccta secondary">💼 Connect on LinkedIn</a>
            <a href="https://github.com/danish9670" target="_blank" rel="noreferrer" className="ccta secondary">⌥ View GitHub Profile</a>
          </div>
        </div>
      </section>

      <footer>© 2026 <span>Danish Raza</span>. Built with Next.js &amp; Tailwind CSS 🚀</footer>
    </>
  );
}