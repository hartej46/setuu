import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, Compass, Wrench, ShieldCheck } from 'lucide-react';
import SetuLogo from './SetuLogo';

export default function Hero({ onOpenApply }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for the connection network with SETU logo palette
    const particleCount = Math.min(Math.floor((width * height) / 20000), 50);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 120 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        color: i % 3 === 0 ? '#20A2B1' : i % 3 === 1 ? '#173F5F' : '#E6972B',
        alpha: Math.random() * 0.4 + 0.25,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle Bridge Arch Line in the background
      ctx.save();
      ctx.strokeStyle = 'rgba(32, 162, 177, 0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);
      ctx.bezierCurveTo(width * 0.25, height * 0.5, width * 0.75, height * 0.5, width, height * 0.8);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(230, 151, 43, 0.08)';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.88);
      ctx.bezierCurveTo(width * 0.3, height * 0.6, width * 0.7, height * 0.6, width, height * 0.88);
      ctx.stroke();
      ctx.restore();

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p.x -= (dxMouse / distMouse) * force * 1.5;
          p.y -= (dyMouse / distMouse) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nodes within proximity (the "SETU Bridge" network)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 120) * 0.16;
            ctx.strokeStyle = `rgba(32, 162, 177, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAFCFE]"
    >
      {/* Dynamic Background Network Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Modern Light Theme Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-[#20A2B1]/12 via-[#173F5F]/8 to-[#E6972B]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#20A2B1]/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#E6972B]/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Announcement Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#20A2B1]/30 text-[#173F5F] text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-[#20A2B1]/15"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20A2B1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20A2B1]"></span>
          </span>
          <span className="font-semibold text-[#173F5F]">Solving Real-World Problems Using Technology</span>
          <span className="text-slate-300">|</span>
          <button
            onClick={onOpenApply}
            className="text-[#20A2B1] hover:text-[#173F5F] flex items-center gap-1 font-bold cursor-pointer transition-colors"
          >
            Join SETU <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>

        {/* Hero Central Emblem and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Bridge Emblem visual */}
          <div className="flex justify-center mb-2">
            <SetuLogo iconOnly={true} className="h-20 sm:h-24 w-auto drop-shadow-md" />
          </div>

          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-[#173F5F]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            SETU
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-[#173F5F]">
            Connecting Ideas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A2B1] to-[#E6972B]">
              Building People.
            </span>
          </h2>
        </motion.div>

        {/* Supporting text centered around the bridge & tech problem-solving */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed"
        >
          SETU is basically a bridge — we solve real problems using technology. A student-driven community connecting diverse minds to build impactful software and meaningful experiences beyond the classroom.
        </motion.p>

        {/* Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[#173F5F] via-[#1A5480] to-[#20A2B1] hover:shadow-xl hover:shadow-[#20A2B1]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
          >
            <span>Join SETU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#173F5F] rounded-full bg-white hover:bg-slate-50 border border-slate-300/80 hover:border-[#20A2B1] shadow-xs transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#20A2B1]" />
            <span>Explore SETU</span>
          </a>
        </motion.div>

        {/* Quick Micro-Stats Bar (Light theme cards) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#20A2B1]" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Community</p>
              <p className="text-sm font-bold text-[#173F5F]">100+ Students</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#173F5F]" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Tech Focus</p>
              <p className="text-sm font-bold text-[#173F5F]">Real Problems Solved</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E6972B]" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Ecosystem</p>
              <p className="text-sm font-bold text-[#173F5F]">6 Creative Tracks</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Culture</p>
              <p className="text-sm font-bold text-[#173F5F]">100% Student-Led</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-[#173F5F] transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold opacity-70">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#20A2B1]" />
      </a>
    </section>
  );
}
