import React from 'react';
import { IMAGES } from '../data/images';
import { getWhatsAppUrl, getSellWhatsAppUrl, getRentWhatsAppUrl } from '../data/business';
import { KeyRound, Building, Handshake, ArrowRight, MessageSquare, Check } from 'lucide-react';

interface ServicePillarsProps {
  onExploreBuy: () => void;
  onExploreRent: () => void;
  onOpenSellModal: () => void;
}

export const ServicePillars: React.FC<ServicePillarsProps> = ({
  onExploreBuy,
  onExploreRent,
  onOpenSellModal,
}) => {
  return (
    <section id="services-pillars" className="py-16 sm:py-24 bg-[#f0ebe1]/50 border-y border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
            Tailored Property Services
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#16191c]">
            Comprehensive Real Estate Guidance
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a626a]">
            Whether you are purchasing your family home, leasing a commercial space, or listing your property on the market.
          </p>
        </div>

        {/* 3 Main Transaction Tracks: Buy, Rent, Sell */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Track 1: Buy Property */}
          <div
            id="buy"
            className="rounded-2xl bg-white p-7 sm:p-8 border border-[#e5ded4] hover:border-[#c5a86a]/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,168,106,0.12)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#faf8f5] border border-[#c5a86a]/30 flex items-center justify-center text-[#16191c] mb-6">
                <KeyRound className="w-7 h-7 text-[#c5a86a]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#16191c]">
                Looking to Buy?
              </h3>

              <p className="mt-3 text-sm text-[#5a626a] leading-relaxed">
                Explore residential and commercial property options with local guidance from Majestic Estates.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#444c55]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>2 & 3 BHK Flats & Apartments in Mayur Vihar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Independent Builder Floors & Society Homes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Commercial Offices & High-Footfall Retail Shops</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0ebe1] flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                id="service-buy-btn"
                onClick={onExploreBuy}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#faf8f5] border border-[#c5a86a]/40 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Find a Property</span>
                <ArrowRight className="w-4 h-4 text-[#c5a86a]" />
              </button>

              <a
                id="service-buy-whatsapp-btn"
                href={getWhatsAppUrl("Hello Majestic Estates, I am looking to BUY a property in Delhi NCR. Please share options.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-all"
                title="WhatsApp Property Enquiries"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Track 2: Rent Property */}
          <div
            id="rent"
            className="rounded-2xl bg-white p-7 sm:p-8 border border-[#e5ded4] hover:border-[#c5a86a]/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,168,106,0.12)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#faf8f5] border border-[#c5a86a]/30 flex items-center justify-center text-[#16191c] mb-6">
                <Building className="w-7 h-7 text-[#c5a86a]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#16191c]">
                Looking to Rent?
              </h3>

              <p className="mt-3 text-sm text-[#5a626a] leading-relaxed">
                Find suitable flats, offices and shops in and around your preferred location.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#444c55]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Family-Friendly Gated Society Flats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Furnished & Semi-Furnished Office Spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Main Market Commercial Shops & Showrooms</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f0ebe1] flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                id="service-rent-btn"
                onClick={onExploreRent}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#faf8f5] border border-[#c5a86a]/40 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Explore Rentals</span>
                <ArrowRight className="w-4 h-4 text-[#c5a86a]" />
              </button>

              <a
                id="service-rent-whatsapp-btn"
                href={getRentWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-all"
                title="WhatsApp Rental Enquiries"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Track 3: Sell Property */}
          <div
            id="sell"
            className="rounded-2xl bg-[#16191c] text-[#faf8f5] p-7 sm:p-8 border border-[#c5a86a]/40 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a86a]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-xl bg-[#faf8f5]/10 border border-[#c5a86a]/40 flex items-center justify-center text-[#c5a86a] mb-6">
                <Handshake className="w-7 h-7 text-[#c5a86a]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#faf8f5]">
                Want to Sell Your Property?
              </h3>

              <p className="mt-3 text-sm text-[#d4cdc3] leading-relaxed">
                Speak with Majestic Estates about presenting your property to interested buyers.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#e5ded4]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Local market pricing alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Connecting with genuine qualified buyers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                  <span>Assisted documentation & consultation</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#faf8f5]/10 flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                id="service-sell-btn"
                onClick={onOpenSellModal}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#c5a86a] hover:bg-[#b39556] text-[#16191c] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Discuss Your Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="service-sell-whatsapp-btn"
                href={getSellWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-all"
                title="WhatsApp Property Selling"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Sell Consultation Showcase Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-[#e5ded4] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 h-56 sm:h-64 rounded-xl overflow-hidden bg-[#16191c]">
            <img
              src={IMAGES.builderFloor}
              alt="Modern Indian independent house and builder floor in Delhi NCR"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#c5a86a]">
              Direct Guidance for Owners
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#16191c] mt-1">
              Looking to list your Flat, Builder Floor, or Commercial Unit?
            </h3>
            <p className="text-sm text-[#5a626a] mt-2 leading-relaxed">
              We guide property owners across Mayur Vihar Phase I, Pandav Nagar, and East Delhi through the complete selling process with professional clarity, site coordination, and genuine buyer introductions.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={getSellWhatsAppUrl("Flat / Floor in Mayur Vihar")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-semibold shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Message Property Details</span>
              </a>
              <button
                type="button"
                onClick={onOpenSellModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#faf8f5] hover:bg-[#f0ebe1] text-[#16191c] border border-[#d4cdc3] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Request Callback</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
