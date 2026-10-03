import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Calendar, Rocket, Infinity as InfinityIcon, Sparkles, Wrench, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { STATS, PILLARS } from '../data/setuData';

function AnimatedCounter({ endValue, suffix = '', duration = 1800, isInfinity = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || isInfinity) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, endValue, duration, isInfinity]);

  return (
    <span ref={ref} className="font-['Outfit'] font-extrabold tracking-tight">
      {isInfinity ? (
        <span className="inline-flex items-center text-5xl md:text-6xl text-[#20A2B1]">
          ∞
        </span>
      ) : (
        <span>
          {count}
          {suffix}
        </span>
      )}
    </span>
  );
}

export default function About() {
  const statIcons = [Users, Calendar, InfinityIcon];

  return (
    <section id="about" className="relative py-28 bg-[#FFFFFF] overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#20A2B1]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6972B]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A2B1]/10 border border-[#20A2B1]/30 text-[#173F5F] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#20A2B1]" />
            <span>Who We Are</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            More Than a Club.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl font-semibold text-[#20A2B1]"
          >
            "SETU is basically a bridge — we try to solve real problems using technology."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            SETU is a collaborative student community where students learn, build, create, organize, and grow together. When students encounter everyday bottlenecks on campus or in society, SETU steps in as the bridge: connecting developers, designers, and organizers to engineer scalable, real-world tech solutions.
          </motion.p>
        </div>

        {/* Animated Counter Stats Grid (Clean Light Cards) */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-8 rounded-3xl bg-[#FAFCFE] border border-slate-200/90 hover:border-[#20A2B1] hover:shadow-xl hover:shadow-[#20A2B1]/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#20A2B1]/10 text-[#20A2B1]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-[#173F5F] mb-2 tracking-tight">
                  <AnimatedCounter
                    endValue={stat.value}
                    suffix={stat.suffix}
                    isInfinity={stat.isInfinity}
                  />
                </div>

                <h3 className="text-base font-bold text-[#173F5F] mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-500 leading-normal">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* The 3 Core Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#E6972B] hover:shadow-xl hover:shadow-[#E6972B]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#E6972B]/10 text-[#E6972B] border border-[#E6972B]/30 mb-4">
                  {pillar.tag}
                </span>
                <h3 className="text-xl font-bold text-[#173F5F] mb-2.5 font-['Outfit']">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>The SETU Standard</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#20A2B1]" />
                  <div className="w-2 h-2 rounded-full bg-[#173F5F]" />
                  <div className="w-2 h-2 rounded-full bg-[#E6972B]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
