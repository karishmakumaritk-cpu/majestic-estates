import React from 'react';
import { Property } from '../types';
import { BUSINESS_INFO, getPropertyWhatsAppUrl } from '../data/business';
import { X, MapPin, BedDouble, Bath, Maximize2, Layers, Compass, CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div
      id="property-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16191c]/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="property-modal-container"
        className="relative w-full max-w-3xl bg-[#faf8f5] rounded-2xl border border-[#c5a86a]/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5ded4]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#c5a86a] bg-[#16191c] px-2.5 py-1 rounded">
              {property.category} • {property.propertyType}
            </span>
            {property.badge && (
              <span className="text-xs font-medium text-[#444c55] bg-[#f0ebe1] px-2.5 py-1 rounded">
                {property.badge}
              </span>
            )}
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#e5ded4] text-[#16191c] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Image with aspect ratio preservation */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-[#16191c]">
            <img
              src={property.image}
              alt={property.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#16191c]/90 text-[#c5a86a] backdrop-blur-md px-4 py-1.5 rounded-lg border border-[#c5a86a]/40 font-bold text-lg sm:text-xl">
              {property.price}
            </div>
          </div>

          {/* Title & Location */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16191c]">
              {property.title}
            </h2>
            <p className="flex items-center gap-1.5 text-sm sm:text-base text-[#5a626a] mt-1">
              <MapPin className="w-4 h-4 text-[#c5a86a] shrink-0" />
              <span>{property.location} {property.subLocation ? `(${property.subLocation})` : ''}</span>
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-[#e5ded4]">
            <div className="flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-[#c5a86a]" />
              <div>
                <span className="text-[11px] text-[#6e7781] block">Built-up Area</span>
                <span className="text-sm font-semibold text-[#16191c]">{property.area}</span>
              </div>
            </div>

            {property.bedrooms && (
              <div className="flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-[#c5a86a]" />
                <div>
                  <span className="text-[11px] text-[#6e7781] block">Bedrooms</span>
                  <span className="text-sm font-semibold text-[#16191c]">{property.bedrooms} BHK</span>
                </div>
              </div>
            )}

            {property.bathrooms && (
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-[#c5a86a]" />
                <div>
                  <span className="text-[11px] text-[#6e7781] block">Bathrooms</span>
                  <span className="text-sm font-semibold text-[#16191c]">{property.bathrooms} Baths</span>
                </div>
              </div>
            )}

            {property.floor && (
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-[#c5a86a]" />
                <div>
                  <span className="text-[11px] text-[#6e7781] block">Floor Details</span>
                  <span className="text-sm font-semibold text-[#16191c]">{property.floor}</span>
                </div>
              </div>
            )}

            {property.facing && (
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#c5a86a]" />
                <div>
                  <span className="text-[11px] text-[#6e7781] block">Facing</span>
                  <span className="text-sm font-semibold text-[#16191c]">{property.facing}</span>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#16191c] mb-2">Overview</h3>
            <p className="text-sm sm:text-base text-[#444c55] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Highlights & Amenities */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#16191c] mb-3">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#16191c]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a86a] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultant Notice */}
          <div className="p-4 rounded-xl bg-[#f0ebe1] border border-[#d4cdc3] text-xs text-[#5a626a] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a86a] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#16191c] block font-medium">Assisted Property Visit & Consultation:</strong>
              Majestic Estates provides end-to-end guidance, physical site visits in Mayur Vihar / Delhi NCR, documentation assistance, and price transparency.
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#faf8f5] border-t border-[#e5ded4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#6e7781] hidden sm:block">
            Consultant: <span className="font-semibold text-[#16191c]">{BUSINESS_INFO.name}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              id="modal-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#faf8f5] border border-[#c5a86a]/40 text-sm font-semibold transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#c5a86a]" />
              <span>Call Now</span>
            </a>

            <a
              id="modal-whatsapp-btn"
              href={getPropertyWhatsAppUrl(property.title, property.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
