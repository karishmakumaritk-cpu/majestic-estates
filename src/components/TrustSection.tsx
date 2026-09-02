import React from 'react';
import { BUSINESS_INFO } from '../data/business';
import { Star, MapPin, Building2, UserCheck, MessageSquare, Shield } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const defensiblePillars = [
    {
      id: 'pillar-local',
      icon: MapPin,
      title: 'Local Area Knowledge',
      description: 'Dedicated on-ground familiarity with Mayur Vihar Phase I, Pandav Nagar, East Delhi, and adjacent NCR sectors.',
    },
    {
      id: 'pillar-options',
      icon: Building2,
      title: 'Residential & Commercial Options',
      description: 'Handling flats, modern apartments, independent builder floors, commercial office setups, and retail shops.',
    },
    {
      id: 'pillar-personalised',
      icon: UserCheck,
      title: 'Personalised Property Assistance',
      description: 'Understanding your exact budget and space requirements before presenting tailored property alternatives.',
    },
    {
      id: 'pillar-direct',
      icon: MessageSquare,
      title: 'Easy Direct Enquiry',
      description: 'Fast and straightforward communication via WhatsApp and direct call with our Mayur Vihar office.',
    },
  ];

  return (
    <section id="trust-and-why" className="py-16 sm:py-20 bg-[#faf8f5] border-b border-[#e5ded4] relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verified Rating Card Banner */}
        <div className="rounded-2xl bg-[#16191c] text-[#faf8f5] p-6 sm:p-8 border border-[#c5a86a]/30 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              {/* Star Rating Badge */}
              <div className="w-16 h-16 rounded-xl bg-[#c5a86a]/15 border border-[#c5a86a]/40 flex items-center justify-center shrink-0">
                <Star className="w-8 h-8 fill-[#c5a86a] text-[#c5a86a]" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-3xl font-bold font-serif text-[#faf8f5]">{BUSINESS_INFO.rating}</span>
                  <span className="text-xs uppercase tracking-wider text-[#c5a86a] font-semibold bg-[#c5a86a]/10 px-2 py-0.5 rounded border border-[#c5a86a]/30">
                    Rating
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#faf8f5] mt-1">
                  Trusted by Property Seekers
                </h2>
                <p className="text-xs sm:text-sm text-[#a4aeb8] mt-0.5">
                  Based on <span className="text-[#faf8f5] font-semibold">{BUSINESS_INFO.reviewCount} customer reviews</span> for property consultancy in Mayur Vihar & Delhi NCR.
                </p>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#faf8f5]/5 border border-[#c5a86a]/25 text-xs text-[#e5ded4]">
                <Shield className="w-4 h-4 text-[#c5a86a]" />
                <span>Transparent Guidance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#faf8f5]/5 border border-[#c5a86a]/25 text-xs text-[#e5ded4]">
                <MapPin className="w-4 h-4 text-[#c5a86a]" />
                <span>Mayur Vihar Phase I</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading: Why Majestic Estates */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
            Our Commitment
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-[#16191c]">
            Why Majestic Estates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a626a]">
            Clear, trustworthy, and approachable property consultancy focused on your exact housing or business space needs.
          </p>
        </div>

        {/* 4 Defensible Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defensiblePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group p-6 rounded-xl bg-white border border-[#e5ded4] hover:border-[#c5a86a]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(197,168,106,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0ebe1] group-hover:bg-[#16191c] text-[#16191c] group-hover:text-[#c5a86a] border border-[#d4cdc3] group-hover:border-[#c5a86a]/40 flex items-center justify-center transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#16191c] group-hover:text-[#16191c]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5a626a] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
