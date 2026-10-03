import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Clock,
  Compass,
  Zap,
} from 'lucide-react';
import { DOMAINS } from '../data/setuData';

export default function Recruitment({ onOpenApply, onApplyWithDomain }) {
  return (
    <section id="recruitment" className="relative py-28 bg-[#FFFFFF] overflow-hidden border-t border-slate-200/80">
      {/* Background radial highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#20A2B1]/8 via-[#173F5F]/6 to-[#E6972B]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F5F]/8 border border-[#173F5F]/20 text-[#173F5F] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#20A2B1]" />
            <span>Recruitment 2026</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            Find Your SETU.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl text-[#20A2B1] font-semibold"
          >
            "There's a place for your ideas here."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            No matter your year, department, or prior tech background, SETU is constructed to be your bridge. Explore the domains, test your alignment, and take your first step to solve real problems using technology.
          </motion.p>
        </div>

        {/* Big CTA Banner: Applications Are Open (Light theme) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#173F5F] via-[#1B5784] to-[#20A2B1] text-white shadow-xl shadow-[#173F5F]/15 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E6972B] animate-ping" />
              <span>Applications Are Open</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
              Join the Fall 2026 Core & Domain Cohort
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Applications close on October 10th. Priority reviews take place on a rolling basis. All batches and branches welcome.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onOpenApply()}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-[#173F5F] bg-white hover:bg-slate-100 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>


        {/* Domain Opportunity Matrix */}
        <div className="mt-20">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-[#173F5F]">
              What You'll Do In Each Domain
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Detailed breakdown of activities, deliverables, and student roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#20A2B1] hover:shadow-xl hover:shadow-[#20A2B1]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold font-['Outfit'] text-[#173F5F]">
                      {domain.title}
                    </h4>
                    <span className="text-[11px] font-mono font-bold text-[#20A2B1]">
                      Active Recruitment
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Responsibilities & Projects:
                    </span>
                    {domain.roles.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#20A2B1] shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Open to all years
                  </span>
                  <button
                    onClick={() => onApplyWithDomain(domain.id)}
                    className="text-xs font-bold text-[#173F5F] hover:text-[#20A2B1] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Apply for {domain.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
