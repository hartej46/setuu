import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Maximize2, Calendar } from 'lucide-react';
import { STORIES_GALLERY } from '../data/setuData';

export default function Stories() {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const tags = ['All', 'Hackathons', 'Workshops', 'Team', 'Events', 'Celebrations', 'Behind The Scenes'];

  const filteredStories =
    activeTag === 'All'
      ? STORIES_GALLERY
      : STORIES_GALLERY.filter((s) => s.category.toLowerCase() === activeTag.toLowerCase());

  return (
    <section id="stories" className="relative py-28 bg-[#FFFFFF] overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#20A2B1]/8 blur-[120px] rounded-full pointer-events-none" />

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
            <span>Captured Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Outfit'] text-[#173F5F] tracking-tight"
          >
            SETU Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600"
          >
            The messy whiteboards, midnight hackathon breakthroughs, stage cheers, and quiet mentorship coffee chats that define our journey.
          </motion.p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTag === tag
                    ? 'bg-[#173F5F] text-white shadow-md shadow-[#173F5F]/20'
                    : 'bg-slate-100 text-slate-600 hover:text-[#173F5F] border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(story)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#20A2B1] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[#173F5F] dark:text-[#38BDF8] border border-transparent dark:border-cyan-500/30 shadow-sm">
                    {story.category}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#173F5F] dark:text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption Card at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[11px] text-[#20A2B1] font-mono mb-1 font-semibold">
                    <Calendar className="w-3 h-3" />
                    <span>{story.date}</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-cyan-200 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video sm:aspect-[16/10] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#20A2B1]/10 text-[#20A2B1] border border-[#20A2B1]/20">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">{selectedPhoto.date}</span>
                </div>

                <h4 className="text-2xl font-bold font-['Outfit'] text-[#173F5F]">
                  {selectedPhoto.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
