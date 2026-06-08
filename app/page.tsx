'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Hotel Booking App',
      desc: 'Full-stack hotel booking system with admin dashboard & room management',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://github.com/danish9670/hotel-booking-MERN',
      live: '',
      emoji: '🏨',
    },
    {
      title: 'RentEase',
      desc: 'Furniture & appliance rental platform for students with JWT authentication',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      link: 'https://github.com/danish9670/Rentease.dr',
      live: 'https://rentease-opal-omega.vercel.app',
      emoji: '🛋️',
    },
    {
      title: 'Notice Board App',
      desc: 'Full-stack CRUD app with priority sorting, deployed on Vercel',
      tech: ['Next.js', 'Prisma', 'MySQL', 'Tailwind CSS'],
      link: 'https://github.com/danish9670/notice-board',
      live: 'https://notice-board-eight-chi.vercel.app/',
      emoji: '📋',
    },
    {
      title: 'Task Manager API',
      desc: 'RESTful API with full CRUD operations',
      tech: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/danish9670/task-managerapi2',
      live: '',
      emoji: '📝',
    },
    {
      title: 'Livestream Shopping',
      desc: 'Real-time group shopping platform with event-driven backend',
      tech: ['React', 'Node.js', 'MongoDB', 'Real-Time'],
      link: 'https://github.com/danish9670/livetogether_shopping_website',
      live: '',
      emoji: '🛍️',
    },
    {
      title: 'ElderEaseCare',
      desc: 'Home healthcare platform connecting families with verified nurses in India',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/danish9670/eldercare',
      live: '',
      emoji: '👴',
    },
  ];

  const skills = [
    { name: 'React.js', color: 'text-cyan-400' },
    { name: 'Next.js', color: 'text-white' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'Express.js', color: 'text-gray-300' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'Tailwind CSS', color: 'text-cyan-300' },
    { name: 'REST API', color: 'text-blue-400' },
    { name: 'Git & GitHub', color: 'text-orange-400' },
    { name: 'Prisma ORM', color: 'text-purple-400' },
    { name: 'MySQL', color: 'text-blue-300' },
    { name: 'Vercel', color: 'text-white' },
  ];

  return (
    <main className="bg-[#0d1117] text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0d1117]/90 backdrop-blur-md z-50 border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-400">Danish Raza</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#161b22] px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
            <Image
              src="/danish.jpeg"
              alt="Danish Raza"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Welcome to my Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Danish Raza</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Full Stack Developer (MERN Stack) • Fresher • Lucknow, India
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              View Projects
            </a>
            <a href="#contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
              Contact Me
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-8 text-gray-400">
            <a href="https://github.com/danish9670" target="_blank" className="hover:text-blue-400 transition">⌥ GitHub</a>
            <a href="https://www.linkedin.com/in/danish-raza-17383332b" target="_blank" className="hover:text-blue-400 transition">💼 LinkedIn</a>
            <a href="mailto:danishraza.stjic@gmail.com" className="hover:text-blue-400 transition">📧 Email</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#161b22]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About <span className="text-blue-400">Me</span></h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> specializing in the MERN Stack. I love building real-world web applications that solve actual problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Currently building <span className="text-blue-400 font-semibold">ElderEaseCare</span> — a home healthcare platform connecting families with verified nurses and caregivers across India.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                🎓 B.Tech Computer Science — BBD Northern India Institute of Technology, Lucknow
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Built', value: '8+' },
                { label: 'Certifications', value: '7+' },
                { label: 'Tech Stack', value: 'MERN' },
                { label: 'Location', value: 'Lucknow' },
              ].map((item) => (
                <div key={item.label} className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-blue-400">{item.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tech <span className="text-blue-400">Stack</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center hover:border-blue-500 transition">
                <p className={`font-semibold ${skill.color}`}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-[#161b22]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 hover:border-blue-500 transition flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-3">{project.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={project.link} target="_blank" className="text-blue-400 text-sm hover:underline">
                    GitHub →
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" className="text-green-400 text-sm hover:underline">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 <span className="text-blue-400">Certifications</span></h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'MERN Stack & DSA — ShapeMySkills by Ducat, Noida',
              'Node.js RESTful API Bootcamp — DevTown x Google Developer Groups',
              'Node.js RESTful API Bootcamp — DevTown x Microsoft Student Chapter, MSIT',
              'Tailwind CSS Bootcamp — Devtown',
              'Generative AI Mastermind — Outskill',
              'Soft Skills — Learnovate Enterprises & BBD University',
              'C Programming Fundamentals — Mindluster',
            ].map((cert) => (
              <div key={cert} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 flex items-start gap-3 hover:border-blue-500 transition">
                <span className="text-blue-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#161b22]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's <span className="text-blue-400">Connect</span></h2>
          <p className="text-gray-400 mb-10">Open for full-time roles, freelance projects, and collaborations!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:danishraza.stjic@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              📧 Email Me
            </a>
            <a href="https://www.linkedin.com/in/danish-raza-17383332b" target="_blank" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              💼 LinkedIn
            </a>
            <a href="https://github.com/danish9670" target="_blank" className="border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition">
              ⌥ GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-[#30363d]">
        © 2026 Danish Raza. Built with Next.js & Tailwind CSS 🚀
      </footer>

    </main>
  );
}