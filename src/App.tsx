/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBar } from './components/ServicesBar';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ComprehensiveCare } from './components/ComprehensiveCare';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ContactModal } from './components/ContactModal';
import { LearnMoreModal } from './components/LearnMoreModal';
import { FaqModal } from './components/FaqModal';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { InitialSignatureLoader } from './components/InitialSignatureLoader';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('Individual Counselling');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const handleSelectTab = (tab: string, targetId?: string) => {
    setActiveTab(tab);
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else if (tab === 'home' || tab === 'about' || tab === 'services' || tab === 'faq' || tab === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Redirects all "Book Appointment" and "Book Your Consultation" actions to the Contact Us page
  const handleRedirectToContact = (_serviceTitle?: string) => {
    // Close any open modals
    setIsBookingOpen(false);
    setIsContactOpen(false);
    setIsLearnMoreOpen(false);
    setIsFaqOpen(false);

    // Switch to Contact Us page and smoothly scroll to the contact form card
    handleSelectTab('contact', 'contact-form-card');
  };

  return (
    <div id="home-page-root" className="min-h-screen bg-[#faf9fc] text-slate-800 flex flex-col font-sans-body selection:bg-[#6c628e]/20 selection:text-[#1a2b49]">
      {/* 1. Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleRedirectToContact()}
      />

      {/* Main Page Content Body */}
      <main className="grow">
        {activeTab === 'about' ? (
          <AboutPage onOpenBooking={() => handleRedirectToContact()} />
        ) : activeTab === 'services' ? (
          <ServicesPage
            onOpenBooking={(service) => handleRedirectToContact(service)}
            onOpenLearnMore={() => {
              handleSelectTab('about');
            }}
            onSelectTab={handleSelectTab}
          />
        ) : activeTab === 'faq' ? (
          <FaqPage
            onOpenBooking={() => handleRedirectToContact()}
            onSelectTab={handleSelectTab}
          />
        ) : activeTab === 'contact' ? (
          <ContactPage
            onOpenBooking={() => handleRedirectToContact()}
            onSelectTab={handleSelectTab}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenBooking={() => handleRedirectToContact()}
              onOpenLearnMore={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. 4-Column Feature Bar (Static) */}
            <ServicesBar />

            {/* 4. About Me Section */}
            <AboutSection
              onOpenLearnMore={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Client Testimonials Section */}
            <TestimonialsSection />

            {/* 6. Comprehensive Care Section */}
            <ComprehensiveCare onOpenBooking={() => handleRedirectToContact()} />

            {/* 7. Call To Action Banner */}
            <CtaBanner
              onOpenBooking={() => handleRedirectToContact()}
              onOpenContact={() => handleSelectTab('contact')}
            />
          </>
        )}
      </main>

      {/* 8. Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={bookingService}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onOpenBooking={() => {
          setIsContactOpen(false);
          handleRedirectToContact();
        }}
      />

      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onOpenBooking={() => {
          setIsLearnMoreOpen(false);
          handleRedirectToContact();
        }}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenBooking={() => {
          setIsFaqOpen(false);
          handleRedirectToContact();
        }}
      />

      {/* Persistent Floating WhatsApp Quick-Contact Button */}
      <WhatsAppButton />

      {/* Initial Page Load Signature Animation */}
      {isInitialLoading && (
        <InitialSignatureLoader onComplete={() => setIsInitialLoading(false)} />
      )}
    </div>
  );
}
