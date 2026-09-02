import React, { useState } from 'react';
import { IMAGES } from '../data/images';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { FilterState } from '../types';
import { Search, MessageSquare, ArrowRight, Star, MapPin, Building, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: Partial<FilterState>) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [transaction, setTransaction] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [location, setLocation] = useState<string>('all');
  const [budget, setBudget] = useState<string>('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      transaction,
      propertyType,
      location,
      budgetRange: budget,
    });
    onExploreClick();
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-[#16191c]">
      {/* Background Photography with Sophisticated Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Modern luxury residential apartment building in Delhi NCR"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle, non-intrusive gradient overlay preserving architectural visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16191c]/92 via-[#16191c]/75 to-[#16191c]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16191c] via-transparent to-[#16191c]/40" />
        
        {/* Subtle architectural grid pattern overlay */}
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Trust & Location Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf8f5]/10 backdrop-blur-md border border-[#c5a86a]/40 text-[#faf8f5] text-xs sm:text-sm font-medium mb-6 animate-fade-in">
          <span className="flex items-center text-[#c5a86a]">
            <Star className="w-3.5 h-3.5 fill-[#c5a86a] text-[#c5a86a] mr-1" />
            <strong className="text-white font-semibold">{BUSINESS_INFO.rating}</strong>
            <span className="text-[#c5a86a]/80 ml-1">({BUSINESS_INFO.reviewCount} Reviews)</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#c5a86a]" />
          <span className="flex items-center gap-1 text-[#e5ded4]">
            <MapPin className="w-3.5 h-3.5 text-[#c5a86a]" />
            Mayur Vihar Phase I, New Delhi
          </span>
        </div>

        {/* Hero Main Heading & Supporting Copy */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#faf8f5] leading-[1.15] tracking-tight">
            Find the Right Property in <span className="text-[#c5a86a] italic font-normal">Delhi NCR</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#d4cdc3] leading-relaxed max-w-2xl font-light">
            From homes to commercial spaces, Majestic Estates helps you buy, sell and rent properties with confidence.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#c5a86a] hover:bg-[#b39556] text-[#16191c] font-semibold text-sm sm:text-base tracking-wide transition-all shadow-[0_4px_20px_rgba(197,168,106,0.3)] cursor-pointer active:scale-95"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-whatsapp-btn"
              href={getWhatsAppUrl("Hello Majestic Estates, I am interested in exploring property options in Delhi NCR.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#faf8f5]/15 hover:bg-[#faf8f5]/25 text-[#faf8f5] border border-[#faf8f5]/30 font-medium text-sm sm:text-base tracking-wide backdrop-blur-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Property Search Panel */}
        <div
          id="property-search-panel"
          className="mt-12 sm:mt-16 w-full max-w-5xl rounded-2xl bg-[#faf8f5] border border-[#c5a86a]/30 shadow-2xl p-4 sm:p-6 lg:p-7 text-[#16191c]"
        >
          {/* I Want To Tabs */}
          <div className="flex items-center justify-between border-b border-[#e5ded4] pb-4 mb-5">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6e7781] mr-2 hidden sm:inline">
                I Want To:
              </span>
              {(['buy', 'rent', 'sell'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  id={`tab-intent-${mode}`}
                  onClick={() => setTransaction(mode)}
                  className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                    transaction === mode
                      ? 'bg-[#16191c] text-[#c5a86a] shadow-sm'
                      : 'bg-[#f0ebe1] text-[#444c55] hover:bg-[#e5ded4]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#5a626a]">
              <ShieldCheck className="w-4 h-4 text-[#c5a86a]" />
              <span>Verified Local Consultancy</span>
            </div>
          </div>

          {/* Search Filter Form */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Property Type Field */}
            <div>
              <label htmlFor="search-property-type" className="block text-xs font-semibold uppercase tracking-wider text-[#444c55] mb-1.5">
                Property Type
              </label>
              <div className="relative">
                <select
                  id="search-property-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-white border border-[#d4cdc3] rounded-lg px-3.5 py-2.5 text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a] transition-colors cursor-pointer"
                >
                  <option value="all">All Types</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Builder Floor">Builder Floor</option>
                  <option value="Office">Office</option>
                  <option value="Shop">Shop</option>
                </select>
              </div>
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="search-location" className="block text-xs font-semibold uppercase tracking-wider text-[#444c55] mb-1.5">
                Location
              </label>
              <div className="relative">
                <select
                  id="search-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-[#d4cdc3] rounded-lg px-3.5 py-2.5 text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a] transition-colors cursor-pointer"
                >
                  <option value="all">All Delhi NCR Locations</option>
                  <option value="Mayur Vihar">Mayur Vihar Phase I</option>
                  <option value="East Delhi">East Delhi / Pandav Nagar</option>
                  <option value="Noida">Noida Corridor</option>
                  <option value="Ghaziabad">Ghaziabad / Expressway</option>
                  <option value="Other">Other Delhi NCR</option>
                </select>
              </div>
            </div>

            {/* Budget Field */}
            <div>
              <label htmlFor="search-budget" className="block text-xs font-semibold uppercase tracking-wider text-[#444c55] mb-1.5">
                Budget
              </label>
              <div className="relative">
                <select
                  id="search-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white border border-[#d4cdc3] rounded-lg px-3.5 py-2.5 text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] focus:ring-1 focus:ring-[#c5a86a] transition-colors cursor-pointer"
                >
                  <option value="all">Select Budget</option>
                  {transaction === 'rent' ? (
                    <>
                      <option value="under-25k">Under ₹25,000 / mo</option>
                      <option value="25k-50k">₹25,000 – ₹50,000 / mo</option>
                      <option value="above-50k">₹50,000+ / mo</option>
                    </>
                  ) : (
                    <>
                      <option value="under-75L">Under ₹75 Lakh</option>
                      <option value="75L-1.5Cr">₹75 Lakh – ₹1.50 Cr</option>
                      <option value="1.5Cr-2.5Cr">₹1.50 Cr – ₹2.50 Cr</option>
                      <option value="above-2.5Cr">₹2.50 Cr+</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="submit"
                id="search-submit-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#c5a86a] border border-[#c5a86a]/40 font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer h-[42px]"
              >
                <Search className="w-4 h-4 text-[#c5a86a]" />
                <span>Find Property</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
