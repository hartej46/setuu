import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle,
} from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../data/setuData';

export default function Events({ onRegisterEvent }) {
  const featuredEvent = UPCOMING_EVENTS.find((e) => e.featured) || UPCOMING_EVENTS[0] || null;
  const otherUpcoming = UPCOMING_EVENTS.filter((e) => e !== featuredEvent);

  return (
    <section id="events" className="relative py-28 bg-[#FAFCFE] overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#20A2B1]/8 blur-[130px] rounded-full pointer-events-none" />

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
            <span>Community Gatherings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            What's Happening?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600"
          >
            From 24-hour problem-solving hackathons to hands-on tech bootcamps, here is how we bridge passion with practice on campus.
          </motion.p>
        </div>

        {/* Featured / Upcoming Events or Coming Soon */}
        {featuredEvent ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 relative overflow-hidden shadow-xl shadow-[#173F5F]/5"
            >
              {/* Subtle glow highlight */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#20A2B1]/8 blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E6972B] text-white shadow-sm">
                      {featuredEvent.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#20A2B1]/10 text-[#20A2B1] border border-[#20A2B1]/30">
                      ● {featuredEvent.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173F5F] font-['Outfit'] tracking-tight">
                      {featuredEvent.title}
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-[#20A2B1] font-semibold">
                      "{featuredEvent.tagline}"
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                    {featuredEvent.description}
                  </p>

                  {/* Event Meta Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-5 h-5 text-[#20A2B1] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Date</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#173F5F]">{featuredEvent.date}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-5 h-5 text-[#173F5F] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Time</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#173F5F]">{featuredEvent.time}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-[#E6972B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Location</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#173F5F]">{featuredEvent.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Registration CTA */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onRegisterEvent(featuredEvent.title)}
                      className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#173F5F] via-[#1A5480] to-[#20A2B1] hover:shadow-xl hover:shadow-[#20A2B1]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#20A2B1]" />
                      <span>Free registration for all campus students</span>
                    </div>
                  </div>
                </div>

                {/* Right Media Image */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 group shadow-md">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {featuredEvent.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#173F5F] shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Upcoming Events Grid */}
            {otherUpcoming.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherUpcoming.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#20A2B1] hover:shadow-xl hover:shadow-[#20A2B1]/10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#173F5F]/10 text-[#173F5F]">
                          {event.badge}
                        </span>
                        <span className="text-xs font-medium text-slate-500">{event.status}</span>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#173F5F] font-['Outfit']">{event.title}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-[#20A2B1] font-semibold">{event.tagline}</p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-1.5 pt-2 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#20A2B1]" />
                          <span className="font-medium text-slate-700">{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#E6972B]" />
                          <span className="font-medium text-slate-700">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex gap-2">
                        {event.tags.map((t) => (
                          <span key={t} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onRegisterEvent(event.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F5F] hover:text-[#20A2B1] cursor-pointer transition-colors"
                      >
                        <span>RSVP</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 max-w-2xl mx-auto p-10 sm:p-14 rounded-3xl bg-white border border-slate-200/90 text-center shadow-sm space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#20A2B1]/10 text-[#20A2B1] flex items-center justify-center mx-auto shadow-xs">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-[#173F5F]">
                Upcoming Events Coming Soon
              </h3>
              <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">
                New customized campus events, hackathons, and workshops will be announced shortly. Stay tuned!
              </p>
            </div>
          </motion.div>
        )}

        {/* Past Events Section */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#20A2B1] font-bold">
                Archived Highlights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-[#173F5F]">
                Past Gatherings & Tech Impact
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              Take a look back at the workshops, ideathons, and summits engineered by our club members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden hover:border-[#20A2B1] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#173F5F] via-[#1B5784] to-[#20A2B1] flex flex-col items-center justify-center relative overflow-hidden p-6 text-center select-none">
                        <div className="absolute inset-0 bg-grid-light opacity-25 pointer-events-none" />
                        <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-2 shadow-inner group-hover:scale-110 transition-transform">
                          <Sparkles className="w-7 h-7 text-[#E6972B]" />
                        </div>
                        <span className="text-[11px] uppercase font-extrabold tracking-widest text-cyan-200">
                          Hackathon Edition
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white/95 dark:bg-slate-900/95 text-[#173F5F] dark:text-[#38BDF8] border border-transparent dark:border-cyan-500/30 backdrop-blur-sm shadow-xs">
                      {event.date}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#20A2B1] font-bold mb-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{event.attendees}</span>
                    </div>

                    <h4 className="text-lg font-bold text-[#173F5F] font-['Outfit'] group-hover:text-[#20A2B1] transition-colors">
                      {event.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-4 leading-relaxed">
                      {event.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex flex-wrap gap-1.5">
                  {event.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-transparent dark:border-slate-700/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
