import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Events from './components/Events';
import Recruitment from './components/Recruitment';
import Team from './components/Team';
import Stories from './components/Stories';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDomain, setModalDomain] = useState('tech');
  const [modalEvent, setModalEvent] = useState(null);

  const handleOpenApply = (domain = 'tech') => {
    setModalDomain(domain);
    setModalEvent(null);
    setModalOpen(true);
  };

  const handleRegisterEvent = (eventTitle) => {
    setModalEvent(eventTitle);
    setModalDomain('tech');
    setModalOpen(true);
  };

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-[#FAFCFE] text-[#1E293B] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-white relative transition-colors duration-300">
      {/* Top Sticky Navigation */}
      <Navbar onOpenApply={() => handleOpenApply('tech')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenApply={() => handleOpenApply('tech')} />

        {/* 2. About SETU */}
        <About />

        {/* 3. Domains (Tech, Design, Marketing, Events, Content, Management) */}
        <Domains onApplyDomain={(domainId) => handleOpenApply(domainId)} />

        {/* 5. Events (Upcoming & Past Highlights) */}
        <Events onRegisterEvent={handleRegisterEvent} />

        {/* 6. Recruitment & Interactive Domain Finder */}
        <Recruitment
          onOpenApply={() => handleOpenApply('tech')}
          onApplyWithDomain={(domainId) => handleOpenApply(domainId)}
        />

        {/* 7. Team Leads */}
        <Team />

        {/* 8. SETU Stories Gallery */}
        <Stories />

        {/* 9. Final Call to Action */}
        <CTA onOpenApply={() => handleOpenApply('tech')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Application & Registration Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDomain={modalDomain}
        initialEvent={modalEvent}
      />
    </div>
    </ThemeProvider>
  );
}
