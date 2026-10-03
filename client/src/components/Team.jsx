import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './SocialIcons';
import { TEAM_MEMBERS, CURRENT_MEMBERS, EX_MEMBERS } from '../data/setuData';

export default function Team() {
  const [filter, setFilter] = useState('Core');

  const namesList = filter === 'Current' ? CURRENT_MEMBERS : filter === 'Ex-Members' ? EX_MEMBERS : null;

  return (
    <section id="team" className="relative py-28 bg-[#FAFCFE] overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#20A2B1]/8 blur-[120px] rounded-full pointer-events-none" />

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
            <span>Leadership & Community</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            Meet the People Behind SETU
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600"
          >
            Passionate students dedicated to bridging peers with real-world tech problem-solving.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {['Current', 'Core', 'Ex-Members'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#173F5F] text-white shadow-md shadow-[#173F5F]/20'
                    : 'bg-white text-slate-600 hover:text-[#173F5F] border border-slate-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Members Rendering */}
        {namesList ? (
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-16 max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
              {namesList.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 py-3 border-b border-slate-100"
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      filter === 'Current' ? 'bg-[#20A2B1]' : 'bg-[#E6972B]'
                    }`}
                  />
                  <span className="text-sm sm:text-base font-semibold text-[#173F5F] tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#20A2B1] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#20A2B1]/10 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              <div>
                {/* Profile Image with subtle zoom */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Domain Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#173F5F] shadow-xs">
                    {member.domain}
                  </span>

                  {/* Social Icons Overlay (reveals smoothly on hover) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#173F5F] flex items-center justify-center hover:bg-[#20A2B1] hover:text-white transition-all shadow-sm"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#173F5F] flex items-center justify-center hover:bg-[#173F5F] hover:text-white transition-all shadow-sm"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} Twitter`}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#173F5F] flex items-center justify-center hover:bg-[#E6972B] hover:text-white transition-all shadow-sm"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-['Outfit'] text-[#173F5F] group-hover:text-[#20A2B1] transition-colors">
                    {member.name}
                  </h3>

                  {/* Role becomes highlighted */}
                  <p className="text-xs uppercase tracking-wider font-bold text-[#20A2B1] group-hover:text-[#173F5F] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20A2B1]" />
                    <span>{member.role}</span>
                  </p>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Quote / Philosophy */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 italic line-clamp-2">
                  {member.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
