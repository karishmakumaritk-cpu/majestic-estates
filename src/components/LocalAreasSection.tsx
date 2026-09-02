import React from 'react';
import { LOCATION_AREAS } from '../data/properties';
import { getWhatsAppUrl } from '../data/business';
import { MapPin, Navigation, Train, ArrowUpRight, MessageSquare } from 'lucide-react';

export const LocalAreasSection: React.FC = () => {
  return (
    <section id="local-areas" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
            Hyperlocal Delhi NCR Expertise
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#16191c]">
            Focus on Mayur Vihar & Surrounding Delhi NCR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a626a] leading-relaxed">
            Majestic Estates is deeply rooted in Mayur Vihar Phase I, offering direct local insight into established cooperative group housing societies, builder pockets, high-traffic commercial markets, and seamless highway connectivity.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATION_AREAS.map((area) => (
            <div
              key={area.id}
              id={`area-card-${area.id}`}
              className="group rounded-2xl bg-white border border-[#e5ded4] hover:border-[#c5a86a]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(197,168,106,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image with realistic Delhi NCR photography */}
              <div className="relative h-48 w-full overflow-hidden bg-[#16191c]">
                <img
                  src={area.image}
                  alt={`${area.name} residential and commercial property hub`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191c]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#faf8f5]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a86a]">
                    Delhi NCR
                  </span>
                  <MapPin className="w-4 h-4 text-[#c5a86a]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#16191c]">
                    {area.name}
                  </h3>
                  <span className="text-xs font-medium text-[#c5a86a] block mt-0.5">
                    {area.subTitle}
                  </span>

                  <p className="mt-3 text-xs text-[#5a626a] leading-relaxed">
                    {area.description}
                  </p>

                  {/* Property Types Available */}
                  <div className="mt-4 pt-3 border-t border-[#f0ebe1]">
                    <span className="text-[11px] font-semibold text-[#6e7781] block mb-1.5 uppercase tracking-wide">
                      Key Property Segments:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.propertyTypes.map((pt, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-[#f0ebe1] text-[#16191c] px-2 py-0.5 rounded"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connectivity Details */}
                  <div className="mt-3 flex items-start gap-1.5 text-[11px] text-[#444c55]">
                    <Train className="w-3.5 h-3.5 text-[#c5a86a] shrink-0 mt-0.5" />
                    <span>{area.metroConnectivity}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-3 border-t border-[#e5ded4]">
                  <a
                    id={`area-enquiry-${area.id}`}
                    href={getWhatsAppUrl(`Hello Majestic Estates, I am looking for properties in ${area.name}. Please share available options.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#faf8f5] hover:bg-[#16191c] text-[#16191c] hover:text-[#c5a86a] border border-[#d4cdc3] hover:border-[#16191c] text-xs font-semibold transition-all"
                  >
                    <span>Enquire for {area.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
