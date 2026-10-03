import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  TrendingUp,
  CalendarDays,
  PenTool,
  Workflow,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { DOMAINS } from '../data/setuData';

const DOMAIN_ICONS = {
  tech: Code2,
  design: Palette,
  marketing: TrendingUp,
  events: CalendarDays,
  content: PenTool,
  management: Workflow,
};

export default function Domains({ onApplyDomain }) {
  const [hoveredDomain, setHoveredDomain] = useState(null);

  return (
    <section id="domains" className="relative py-28 bg-[#FFFFFF] overflow-hidden border-t border-slate-200/80">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#20A2B1]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E6972B]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A2B1]/10 border border-[#20A2B1]/30 text-[#173F5F] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#20A2B1]" />
            <span>Specialized Tracks</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            Discover Your Domain
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600"
          >
            Every project at SETU is cross-functional. Choose the track where your skills thrive, or collaborate across tracks to solve real problems using tech.
          </motion.p>
        </div>

        {/* 6 Domain Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOMAINS.map((domain, idx) => {
            const IconComponent = DOMAIN_ICONS[domain.id] || Code2;
            const isHovered = hoveredDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className={`group relative rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${
                  isHovered
                    ? 'border-[#20A2B1] -translate-y-1.5 shadow-[#20A2B1]/10'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
                onClick={() => onApplyDomain(domain.id)}
              >
                {/* Background soft color tint */}
                <div
                  className={`absolute inset-0 ${domain.lightBg} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Domain Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: domain.accent,
                        border: `1.5px solid ${domain.accent}40`,
                      }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold font-['Outfit'] text-[#173F5F] tracking-wide group-hover:text-[#20A2B1] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#20A2B1] italic">
                    "{domain.tagline}"
                  </p>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Roles / Focus Areas */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {domain.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#173F5F] border border-slate-200 shadow-xs"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: domain.accent }}
                        />
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Hover Action */}
                <div className="relative z-10 mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-end">
                  {/* Arrow that transitions on hover */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#173F5F] group-hover:text-[#20A2B1] transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                      Join Track
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#20A2B1] text-[#173F5F] group-hover:text-white border border-slate-200 group-hover:border-[#20A2B1] flex items-center justify-center transition-all duration-200 shadow-xs">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
