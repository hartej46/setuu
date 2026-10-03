import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Rocket, Heart } from 'lucide-react';

export default function CTA({ onOpenApply }) {
  return (
    <section className="relative py-32 bg-[#FAFCFE] overflow-hidden border-t border-slate-200/80">
      {/* Background Architectural Bridge Structure SVG with Authentic SETU Colors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg
          className="w-full max-w-6xl h-auto"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Bridge Cable */}
          <path
            d="M 50 100 Q 600 380 1150 100"
            stroke="url(#bridge-grad-light)"
            strokeWidth="3"
            strokeDasharray="4 8"
          />
          {/* Deck */}
          <line x1="50" y1="320" x2="1150" y2="320" stroke="#20A2B1" strokeWidth="2.5" opacity="0.4" />
          {/* Vertical Suspenders */}
          {[150, 250, 350, 450, 550, 650, 750, 850, 950, 1050].map((x) => (
            <line
              key={x}
              x1={x}
              y1="320"
              x2={x}
              y2={Math.min(320, 100 + Math.pow((x - 600) / 550, 2) * 280)}
              stroke="rgba(32, 162, 177, 0.3)"
              strokeWidth="1.5"
            />
          ))}
          {/* Towers */}
          <line x1="300" y1="40" x2="300" y2="360" stroke="#173F5F" strokeWidth="3" opacity="0.4" />
          <line x1="900" y1="40" x2="900" y2="360" stroke="#173F5F" strokeWidth="3" opacity="0.4" />
          <defs>
            <linearGradient id="bridge-grad-light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#20A2B1" />
              <stop offset="50%" stopColor="#E6972B" />
              <stop offset="100%" stopColor="#173F5F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Radial lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#20A2B1]/10 via-[#173F5F]/8 to-[#E6972B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F5F]/8 border border-[#173F5F]/20 text-[#173F5F] text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#20A2B1]" />
          <span>The Next Step</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-['Outfit'] text-[#173F5F] tracking-tight"
        >
          Your SETU journey starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#173F5F] via-[#20A2B1] to-[#E6972B]"
        >
          Connect. Create. Lead.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed"
        >
          Surround yourself with fellow problem solvers, builders, and creators who believe in using technology to solve real challenges.
        </motion.p>

        {/* Big Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#173F5F] via-[#1B5784] to-[#20A2B1] hover:shadow-2xl hover:shadow-[#20A2B1]/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Join SETU</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-[#20A2B1]" />
            <span>Fast-track tech project experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#E6972B]" />
            <span>Friendly, student-first community</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#173F5F]" />
            <span>Direct alumni and senior mentorship</span>
          </div>
        </div>
      </div>
    </section>
  );
}
