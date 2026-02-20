import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Cpu, Zap, Wifi, Layers, Github, Linkedin, Mail, ArrowRight,
  Menu, X, Sun, Moon, MapPin, Phone, GraduationCap,
  Briefcase, Code, Radio, Terminal, Box, ChevronRight, Activity, Globe
} from 'lucide-react';

const ArcReactor = ({ className }) => {
  const accent = "var(--accent)";
  const glow = "var(--accent-glow)";

  return (
    <div className={`relative w-64 h-64 ${className}`}>
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full filter brightness-150 saturate-150"
        style={{
          filter: `drop-shadow(0 0 30px ${glow})`
        }}
      >
        <defs>
          <pattern id="hex-grid" width="8" height="14" patternUnits="userSpaceOnUse" patternTransform="scale(0.6)">
            <path d="M4 0 L8 2.3 L8 7 L4 9.3 L0 7 L0 2.3 Z" fill="none" stroke={accent} strokeOpacity="0.6" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="inner-beam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="20%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Chassis Layout */}
        <circle cx="100" cy="100" r="95" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="4,4" strokeOpacity="0.3" />

        {/* Revolving Housing */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <rect
              key={i} x="96" y="0" width="8" height="12" rx="1"
              fill={accent} fillOpacity="0.3" stroke={accent} strokeOpacity="1" strokeWidth="1.5"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </motion.g>

        {/* Main Coils */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <path d="M90 15 L110 15 L108 35 L92 35 Z" fill={accent} fillOpacity="0.5" stroke={accent} strokeWidth="2" />
            {[...Array(4)].map((_, j) => (
              <line
                key={j} x1="93" y1={18 + (j * 4)} x2="107" y2={18 + (j * 4)}
                stroke={accent} strokeWidth="1" strokeOpacity="1"
              />
            ))}
          </g>
        ))}

        {/* Support Chassis */}
        <circle cx="100" cy="100" r="65" fill="none" stroke={accent} strokeWidth="8" strokeDasharray="2,6" strokeOpacity="0.5" />
        <circle cx="100" cy="100" r="58" fill="none" stroke={accent} strokeWidth="2" strokeOpacity="1" />

        {/* Structural Beams */}
        {[0, 120, 240].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 100 100)`}>
            <rect x="92" y="40" width="16" height="40" rx="2" fill={accent} fillOpacity="0.6" stroke={accent} strokeWidth="2.5" />
            <line x1="100" y1="45" x2="100" y2="75" stroke={accent} strokeWidth="1.5" />
          </g>
        ))}

        {/* Containment */}
        <circle cx="100" cy="100" r="45" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="2" strokeOpacity="0.8" />
        <circle cx="100" cy="100" r="42" fill="url(#inner-beam)" />

        {/* Flux Mesh */}
        <circle cx="100" cy="100" r="35" fill="url(#hex-grid)" />

        {/* Core Emitter */}
        <circle cx="100" cy="100" r="15" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="2" />
        <motion.circle
          cx="100" cy="100" r="9"
          fill="white"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [0.95, 1.1, 0.95],
            boxShadow: ["0 0 20px white", "0 0 40px white", "0 0 20px white"]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="100" cy="100" r="4" fill={accent} />
      </motion.svg>
    </div>
  );
};

const EngineeringPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const education = [
    {
      period: "2022 - 2026",
      institute: "K J Somaiya Institute of Technology",
      degree: "Electronics & Telecommunication",
      sub: "B.Tech Engineering Candidate"
    },
    {
      period: "2020 - 2022",
      institute: "S K Somaiya College",
      degree: "Higher Secondary Education",
      sub: "Technical Sciences Focus"
    }
  ];

  const experience = [
    {
      company: "Gurutvaa Systems (Pune)",
      role: "Electronics Intern",
      period: "Summer Phase",
      desc: "Architecting hardware components and RF module validation."
    },
    {
      company: "Acme Grade",
      role: "AI Developer Intern",
      period: "Year Cycle 23-24",
      desc: "Developing neural models and algorithmic data structures."
    }
  ];

  const projects = [
    {
      title: "2.45GHz RF Antenna",
      id: "MARK-01",
      desc: "Precision microstrip design for signal interception systems using electromagnetic simulations.",
      tech: ["Ansys HFSS", "Microwave", "RF Logic"],
      icon: <Radio />
    },
    {
      title: "Tactical Stumps",
      id: "MARK-02",
      desc: "Reactive sensor-integrated cricket stumps with real-time Pi processing architectures.",
      tech: ["Raspberry Pi", "Sensors", "Python"],
      icon: <Box />
    },
    {
      title: "Pulse Oximeter",
      id: "MARK-03",
      desc: "Real-time respiratory and pulse analytics using high-throughput I2C protocols.",
      tech: ["Arduino", "Embedded C", "MAX301"],
      icon: <Zap />
    }
  ];

  return (
    <div className="min-h-screen transition-all duration-1000 relative bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      {/* Background HUD Elements */}
      <div className="fixed inset-0 bg-circuit opacity-[0.05] pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-morphism py-4 border-b border-[var(--border)]' : 'py-10'}`}>
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-6"
          >
            <div className="text-sm font-mono tracking-[0.5em] text-accent font-bold">STATUS: ACTIVE</div>
            <div className="h-px w-20 bg-accent/30 hidden md:block" />
            <div className="text-2xl font-black tracking-widest uppercase">
              Meet<span className="text-accent underline decoration-4 underline-offset-4">.Panchal</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-12">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center border border-accent/30 rounded-full hover:bg-accent/10 transition-all group"
            >
              {theme === 'dark' ? <Sun size={16} className="text-accent" /> : <Moon size={16} className="text-[var(--text-secondary)]" />}
            </button>
          </div>

          <button className="lg:hidden p-2 text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] p-10 lg:hidden flex flex-col justify-center"
          >
            <div className="flex flex-col gap-10">
              {['About', 'Experience', 'Projects', 'Skills'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter hover:text-accent"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 justify-center md:justify-start">
              <span className="text-accent font-mono text-xs font-bold tracking-[0.5em] uppercase text-glow">ELECTRONICS AND TELECOMMUNICATION ENGINEER</span>
              <div className="h-px w-24 bg-accent/50 hidden md:block" />
              <span className="text-xs font-mono opacity-40">LON: 72.8777° E | LAT: 19.0760° N</span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              EXTC <br />
              <span className="text-accent text-glow">Engineer</span>
            </h1>

            <p className="max-w-2xl text-text-secondary text-xl md:text-2xl font-medium leading-relaxed mb-16 opacity-80">
              Final-year Electronics and Telecommunication Engineering student specializing in embedded systems,
              robotics, and wireless communication applications.
            </p>

            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              <a href="#projects" className="group relative px-12 py-5 overflow-hidden">
                <div className="absolute inset-0 bg-accent transition-transform duration-500 group-hover:scale-105" />
                <span className="relative z-10 text-xs font-black uppercase tracking-[0.4em] text-[var(--bg-primary)] flex items-center gap-3">
                  PROJECTS <ChevronRight size={14} />
                </span>
              </a>
              <a href="https://cricket-score-tracker-qtf4.onrender.com/" target="_blank" rel="noopener noreferrer" className="group px-12 py-5 border-2 border-[var(--border)] hover:border-accent transition-all relative overflow-hidden">
                <span className="text-xs font-black uppercase tracking-[0.4em]">LATEST PROJECT</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Arc Reactor HUD Element */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 right-[10%] hidden lg:block animate-hud"
        >
          <ArcReactor />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
                The <br /><span className="text-accent">Protocol</span>
              </h2>
              <div className="space-y-10 text-xl text-text-secondary font-medium max-w-lg leading-relaxed text-glow">
                <p>
                  Final-year Electronics and Telecommunication Engineering student with working knowledge of embedded systems, robotics, and wireless communication.
                </p>
                <p>
                  Experienced in developing practical hardware projects using Arduino, Raspberry Pi, and a variety of sensors. Also worked on designing and simulating a 2.45 GHz microstrip patch antenna for wireless communication applications.
                </p>
              </div>

              <div className="mt-16 flex gap-12">
                <div>
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 mb-2">Phase</div>
                  <div className="text-3xl font-black text-accent">04/04</div>
                </div>
                <div className="w-px h-12 bg-[var(--border)]" />
                <div>
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 mb-2">Target</div>
                  <div className="text-3xl font-black text-accent">2026</div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-12 flex items-center gap-4">
                <div className="h-px w-12 bg-accent/30" /> CORE INTERESTS
              </h4>
              <div className="relative border-l border-white/5 pl-8 md:pl-12 py-10">
                <div className="absolute top-0 left-[-2px] w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-0 left-[-2px] w-4 h-4 border-b-2 border-l-2 border-accent" />

                <div className="flex flex-col gap-12">
                  {['RF Circuitry', 'Embedded Systems', 'PCB Layouts', 'Signal Analysis'].map(skill => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 10 }}
                      className="group relative"
                    >
                      <div className="text-[10px] font-mono text-accent tracking-[0.4em] uppercase mb-1">DATA_STREAM: ACTIVE</div>
                      <div className="flex items-center justify-between gap-8 mb-2">
                        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                          {skill}
                        </h4>
                        <Activity className="text-accent/20 group-hover:text-accent group-hover:animate-pulse transition-all hidden md:block" />
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex gap-1.5 flex-grow max-w-[200px]">
                          {[1, 2, 3, 4, 5].map(dot => (
                            <div key={dot} className={`h-1.5 flex-grow rounded-full ${dot < 5 ? 'bg-accent shadow-[0_0_8px_var(--accent)]' : 'bg-accent/10'}`} />
                          ))}
                        </div>
                        <div className="text-[8px] font-mono opacity-20 uppercase tracking-[0.2em]">CAPACITY_INDEX_92</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="section-spacing bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Mission <br /><span className="text-accent">Log</span>
            </h3>
            <div className="text-right hidden md:block">
              <div className="text-[10px] font-mono opacity-40 mb-2 uppercase tracking-[0.4em]">LAST_UPDATE: FEB 20 2026</div>
              <div className="h-px w-48 bg-accent/20 ml-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-32 items-start">
            {/* Professional Column */}
            <div className="space-y-12">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-12 flex items-center gap-4">
                <div className="h-px w-12 bg-accent/30" /> PROFESSIONAL DEPLOYMENT
              </h4>
              <div className="relative border-l border-white/5 pl-8 md:pl-12 py-2">
                <div className="absolute top-0 left-[-2px] w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-0 left-[-2px] w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="flex flex-col gap-16">
                  {experience.map((exp, i) => (
                    <motion.div
                      key={`exp-${i}`}
                      whileHover={{ x: 15, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="group relative p-4 -m-4 rounded-xl hover:bg-accent/[0.03] transition-colors"
                    >
                      <div className="text-sm font-mono text-accent tracking-[0.4em] mb-2 uppercase">{exp.period}</div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-all">
                          {exp.role}
                        </h4>
                        <Briefcase size={20} className="text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all ml-4" />
                      </div>
                      <div className="text-md font-bold opacity-80 group-hover:opacity-100 transition-opacity mt-2 mb-1 uppercase tracking-tight">{exp.company}</div>
                      <div className="text-[9px] font-mono opacity-30 group-hover:opacity-60 transition-opacity uppercase tracking-[0.3em]">MISSION_SPEC: {exp.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Institutional Column */}
            <div className="space-y-12">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] opacity-40 mb-12 flex items-center gap-4">
                <div className="h-px w-12 bg-accent/30" /> INSTITUTIONAL TRAINING
              </h4>
              <div className="relative border-l border-white/5 pl-8 md:pl-12 py-2">
                <div className="absolute top-0 left-[-2px] w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-0 left-[-2px] w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="flex flex-col gap-16">
                  {education.map((edu, i) => (
                    <motion.div
                      key={`edu-${i}`}
                      whileHover={{ x: 15, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="group relative p-4 -m-4 rounded-xl hover:bg-accent/[0.03] transition-colors"
                    >
                      <div className="text-sm font-mono text-accent tracking-[0.4em] mb-2 uppercase">{edu.period}</div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-all">
                          {edu.institute}
                        </h4>
                        <GraduationCap size={20} className="text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all ml-4" />
                      </div>
                      <div className="text-md font-bold opacity-80 group-hover:opacity-100 transition-opacity mt-2 mb-1 uppercase tracking-tight">{edu.degree}</div>
                      <div className="text-[9px] font-mono opacity-30 group-hover:opacity-60 transition-opacity uppercase tracking-[0.3em]">ACADEMIC_LOG: {edu.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-spacing">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20 flex flex-col items-center">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
              The <span className="text-accent underline decoration-8 underline-offset-[12px]">Inventory</span>
            </h2>
            <p className="text-[10px] font-mono opacity-40 tracking-[0.8em]">HARDWARE_PROTOTYPES_V_4.0</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                viewport={{ once: true }}
                className="group relative w-full h-full"
              >
                <div className="hud-border hud-border-tl hud-border-tr hud-border-bl hud-border-br p-10 glass-morphism h-full flex flex-col hover:border-accent hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.1)] transition-all duration-500 overflow-hidden bg-accent/2">
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-7xl font-black select-none pointer-events-none group-hover:opacity-10 transition-opacity uppercase">{proj.id}</div>

                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-all rounded-sm">
                    {proj.icon}
                  </div>

                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">{proj.title}</h4>
                  <p className="text-text-secondary font-medium leading-relaxed mb-10 flex-grow text-sm opacity-80">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[8px] font-black uppercase tracking-[0.1em] px-3 py-1 bg-accent/5 border border-accent/10 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Interface */}
      <footer id="contact" className="py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)] mt-32 relative overflow-hidden">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="flex flex-col items-start px-4">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter mb-12"
              >
                ROLL <br /><span className="text-accent">OUT.</span>
              </motion.h2>

              <div className="space-y-6">
                <a href="mailto:Meet04panchal@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]"><Mail size={18} /></div>
                  <span className="text-xl font-black tracking-tight group-hover:text-accent transition-colors underline decoration-2 underline-offset-8 font-mono">Meet04panchal@gmail.com</span>
                </a>
                <a href="tel:+919869107055" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]"><Phone size={18} /></div>
                  <span className="text-xl font-black tracking-tight group-hover:text-accent transition-colors"> +91 9869107055</span>
                </a>
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-10">
                  {['English', 'Hindi', 'Marathi', 'Gujarati'].map((lang) => (
                    <div
                      key={lang}
                      className="hud-border hud-border-tr hud-border-bl p-4 glass-morphism hover:bg-accent/10 border-accent/10 hover:border-accent transition-all duration-500 group relative"
                    >
                      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/20 group-hover:border-accent group-hover:opacity-100 transition-all" />
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-px bg-accent/20 group-hover:w-12 group-hover:bg-accent transition-all" />
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-all">{lang}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end lg:items-end px-4">
              <div className="flex gap-6 mb-20">
                <a href="https://www.linkedin.com/in/meetpanchal04" target="_blank" rel="noopener noreferrer" className="w-20 h-20 glass-morphism border border-[var(--border)] rounded flex items-center justify-center hover:bg-accent hover:text-[var(--bg-primary)] transition-all shadow-xl hover:shadow-accent/20"><Linkedin size={32} /></a>
                <a href="https://github.com/panchalmeet0055-tech" target="_blank" rel="noopener noreferrer" className="w-20 h-20 glass-morphism border border-[var(--border)] rounded flex items-center justify-center hover:bg-accent hover:text-[var(--bg-primary)] transition-all shadow-xl hover:shadow-accent/20"><Github size={32} /></a>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono opacity-40 tracking-[0.5em] uppercase mb-4">ENCRIPTED CONNECTION</div>
                <div className="text-2xl font-black uppercase tracking-widest">
                  © {new Date().getFullYear()} MEET PANCHAL
                </div>
                <div className="flex gap-2 justify-end mt-4 opacity-10">
                  {[1, 1, 1, 1, 1, 1, 1].map((_, i) => <div key={i} className="w-1 h-4 bg-accent" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EngineeringPortfolio;
