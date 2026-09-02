import React from 'react';
import { IMAGES } from '../data/images';
import { getWhatsAppUrl } from '../data/business';
import { Briefcase, Building, Store, Shield, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

interface CommercialSectionProps {
  onExploreCommercial: () => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onExploreCommercial }) => {
  const commercialHighlights = [
    {
      icon: Briefcase,
      title: 'Modern Corporate Offices',
      desc: 'Plug-and-play executive cabins, team workstations, and ready setups in East Delhi & Noida business complexes.',
    },
    {
      icon: Store,
      title: 'High-Footfall Retail Shops',
      desc: 'Prime street-facing and market complex retail shops with prominent display frontage in Mayur Vihar & Pandav Nagar.',
    },
    {
      icon: Building,
      title: 'Commercial Asset Leasing',
      desc: 'Strategic leasing advisory for clinics, consultation bureaus, banking points, training centers, and service outlets.',
    },
  ];

  return (
    <section id="commercial" className="py-16 sm:py-24 bg-[#16191c] text-[#faf8f5] relative overflow-hidden">
      {/* Abstract architectural grid overlay */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
            Commercial Real Estate
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#faf8f5]">
            Offices, Shops & Commercial Spaces
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d4cdc3]">
            Dedicated commercial property consultancy across Mayur Vihar Phase I, East Delhi, and adjacent Noida corporate hubs.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Commercial Architecture Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a86a]/30 shadow-2xl h-72 sm:h-80 bg-[#23272b]">
              <img
                src={IMAGES.commercialBuilding}
                alt="Contemporary commercial office building in Delhi NCR"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#16191c]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#c5a86a]/30 text-xs font-medium text-[#c5a86a]">
                Commercial Building Complexes • Delhi NCR
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-[#c5a86a]/20 h-40 bg-[#23272b]">
                <img
                  src={IMAGES.officeInterior}
                  alt="Modern Delhi NCR office interior with workstations"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191c]/90 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-[#faf8f5]">Furnished Offices</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-[#c5a86a]/20 h-40 bg-[#23272b]">
                <img
                  src={IMAGES.commercialShop}
                  alt="Modern street-facing commercial shop in Mayur Vihar Delhi"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191c]/90 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-[#faf8f5]">Retail Market Shops</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Features & Consultation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {commercialHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#23272b]/70 border border-[#c5a86a]/25 hover:border-[#c5a86a]/50 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-[#c5a86a]/15 text-[#c5a86a] border border-[#c5a86a]/30 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#faf8f5]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#a4aeb8] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Defensible Commercial Consultation Notice */}
            <div className="p-5 rounded-xl bg-[#faf8f5]/5 border border-[#c5a86a]/30 text-xs text-[#d4cdc3] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#c5a86a]">
                <Shield className="w-4 h-4" />
                <span>Commercial Verification & Strategic Site Visits</span>
              </div>
              <p className="leading-relaxed">
                We assist business owners, retail operators, doctors, and professionals with clear title documentation, power load verification, market footfall assessment, and lease negotiation.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="commercial-whatsapp-btn"
                href={getWhatsAppUrl("Hello Majestic Estates, I am looking for Commercial Property (Office / Shop) in Mayur Vihar or Delhi NCR. Please share available options.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                id="commercial-view-listings-btn"
                onClick={onExploreCommercial}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#faf8f5]/10 hover:bg-[#faf8f5]/20 text-[#faf8f5] border border-[#c5a86a]/40 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>View Commercial Listings</span>
                <ArrowRight className="w-4 h-4 text-[#c5a86a]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
