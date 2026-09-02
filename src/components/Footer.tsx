import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, getCallNumber, getWhatsAppUrl, getDirectionsUrl } from '../data/business';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSellModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSellModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101214] text-[#a4aeb8] border-t border-[#c5a86a]/20">
      {/* Top Banner with Quick Actions */}
      <div className="bg-[#16191c] border-b border-[#faf8f5]/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a86a]/15 border border-[#c5a86a]/30 flex items-center justify-center text-[#c5a86a]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#faf8f5]">
                Serving Mayur Vihar & Delhi NCR with Distinction
              </p>
              <p className="text-xs text-[#a4aeb8]">
                Registered Real Estate Consultants • Residential & Commercial Specialists
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="footer-call-btn"
              href={`tel:${getCallNumber()}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#faf8f5]/10 hover:bg-[#faf8f5]/20 text-[#faf8f5] text-xs font-semibold border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#c5a86a]" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            <a
              id="footer-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Address info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-xs text-[#a4aeb8] leading-relaxed max-w-sm mt-3">
              Premier real estate consultancy specializing in residential society flats, independent builder floors, commercial offices, and retail shops across Mayur Vihar and East Delhi NCR.
            </p>

            <div className="pt-3 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a86a] shrink-0 mt-0.5" />
                <span className="text-[#d4cdc3]">{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a86a] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a86a] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#faf8f5] tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('properties')}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Featured Properties
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Commercial Spaces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services-pillars')}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Buy & Rent Guidance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSellModal}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Sell / List Property
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('local-areas')}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Local Mayur Vihar Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#c5a86a] transition-colors cursor-pointer"
                >
                  Why Majestic Estates
                </button>
              </li>
            </ul>
          </div>

          {/* Local Area Focus */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#faf8f5] tracking-wider uppercase">
              Coverage Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-[#d4cdc3]">Mayur Vihar Phase I (Societies & Pockets)</li>
              <li className="text-[#d4cdc3]">Pandav Nagar Residential & Commercial Hub</li>
              <li className="text-[#d4cdc3]">Mayur Vihar Phase II & Pocket Complexes</li>
              <li className="text-[#d4cdc3]">Patparganj & IP Extension Societies</li>
              <li className="text-[#d4cdc3]">Noida Corporate Hubs (Sectors 15, 16, 18)</li>
            </ul>
          </div>

          {/* Office Directions & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#faf8f5] tracking-wider uppercase">
              Visit Consultation Desk
            </h4>
            <p className="text-xs text-[#a4aeb8] leading-relaxed">
              Located conveniently at Pocket 1, Mayur Vihar Phase 1. We invite you for coffee and a transparent property consultation.
            </p>
            <div className="pt-2">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#faf8f5]/10 hover:bg-[#c5a86a] hover:text-[#16191c] text-[#faf8f5] text-xs font-semibold border border-[#c5a86a]/30 transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-[#faf8f5]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e7781] gap-4">
          <p>© {new Date().getFullYear()} Majestic Estates. All Rights Reserved. Mayur Vihar Phase 1, Delhi - 110091.</p>
          <div className="flex items-center gap-6">
            <span>RERA Registered Property Consultants</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#c5a86a] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
