import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './SocialIcons';
import { NAV_LINKS } from '../data/setuData';
import SetuLogo from './SetuLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FFFFFF] border-t border-slate-200/90 pt-16 pb-12 overflow-hidden text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <SetuLogo showText={true} />

            <p className="text-base text-[#20A2B1] font-semibold">
              "Connecting Ideas. Building People."
            </p>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              SETU is basically a bridge — we solve real-world problems using technology. A student-driven community connecting multidisciplinary skills with impactful software deployments.
            </p>

            
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#173F5F] font-bold">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#20A2B1] transition-colors py-1 font-medium text-slate-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#173F5F] font-bold">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-500">
              Follow our campus updates, event broadcasts, and behind-the-scenes stories.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/setu_nst/"
                target="_blank"
                rel="noreferrer"
                aria-label="SETU Instagram"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#20A2B1] hover:bg-[#20A2B1]/10 hover:text-[#20A2B1] flex items-center justify-center text-slate-600 transition-all duration-200 shadow-xs"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/setu-nst/home/"
                target="_blank"
                rel="noreferrer"
                aria-label="SETU LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#173F5F] hover:bg-[#173F5F]/10 hover:text-[#173F5F] flex items-center justify-center text-slate-600 transition-all duration-200 shadow-xs"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="SETU GitHub"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E6972B] hover:bg-[#E6972B]/10 hover:text-[#E6972B] flex items-center justify-center text-slate-600 transition-all duration-200 shadow-xs"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-medium">© 2026 SETU. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500 font-medium">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> by SETU Tech Team
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#173F5F] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
