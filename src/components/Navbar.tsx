import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'sell', label: 'Sell' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'local-areas', label: 'Local Areas' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(22,25,28,0.06)] border-b border-[#c5a86a]/20 py-3'
          : 'bg-[#faf8f5]/90 backdrop-blur-sm border-b border-[#c5a86a]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="focus:outline-none text-left cursor-pointer"
          >
            <Logo variant="horizontal" theme="dark" symbolSize={38} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors duration-200 relative cursor-pointer ${
                    isActive
                      ? 'text-[#16191c] font-semibold'
                      : 'text-[#444c55] hover:text-[#16191c]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c5a86a] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Us CTA */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl("Hello Majestic Estates, I would like to enquire about properties in Delhi NCR.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#20ba59] transition-all shadow-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>

            {/* Call Now CTA */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16191c] text-[#faf8f5] border border-[#c5a86a]/40 text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#23272b] hover:border-[#c5a86a] transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a86a]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger & Quick Call */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-[#16191c] text-[#c5a86a] border border-[#c5a86a]/30"
              aria-label="Call Majestic Estates"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <a
              id="mobile-quick-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp Majestic Estates"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#16191c] hover:bg-[#f0ebe1] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[69px] bg-[#faf8f5] border-b border-[#c5a86a]/30 shadow-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-md text-base font-medium text-[#16191c] hover:bg-[#f0ebe1] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#c5a86a]" />
              </button>
            ))}

            <div className="pt-4 border-t border-[#c5a86a]/20 grid grid-cols-2 gap-3">
              <a
                id="mobile-drawer-whatsapp-btn"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white text-sm font-semibold shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>

              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#16191c] text-[#faf8f5] border border-[#c5a86a]/40 text-sm font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#c5a86a]" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-[#6e7781]">
              <p className="font-medium text-[#16191c]">Majestic Estates</p>
              <p>Mayur Vihar Phase I, New Delhi – 110091</p>
              <p className="text-[#c5a86a] mt-0.5">{BUSINESS_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
