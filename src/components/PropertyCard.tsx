import React from 'react';
import { Property } from '../types';
import { getPropertyWhatsAppUrl } from '../data/business';
import { MapPin, BedDouble, Maximize2, MessageSquare, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  return (
    <div
      id={`property-card-${property.id}`}
      className="group rounded-2xl bg-white border border-[#e5ded4] hover:border-[#c5a86a]/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(197,168,106,0.14)] transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#16191c] cursor-pointer" onClick={() => onSelect(property)}>
        <img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Category & Badge Overlay */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 items-center">
          <span className="px-2.5 py-1 rounded-md bg-[#16191c]/90 backdrop-blur-md text-[#c5a86a] text-xs font-semibold uppercase tracking-wider border border-[#c5a86a]/30">
            {property.propertyType}
          </span>
          {property.badge && (
            <span className="px-2.5 py-1 rounded-md bg-[#faf8f5]/90 backdrop-blur-md text-[#16191c] text-xs font-medium border border-[#d4cdc3]">
              {property.badge}
            </span>
          )}
        </div>

        {/* Pricing Tag */}
        <div className="absolute bottom-3.5 left-3.5">
          <span className="px-3 py-1.5 rounded-lg bg-[#16191c]/95 backdrop-blur-md text-[#faf8f5] font-serif text-lg font-bold border border-[#c5a86a]/40 shadow-sm">
            {property.price}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onSelect(property)}
              className="font-serif text-lg sm:text-xl font-bold text-[#16191c] hover:text-[#c5a86a] transition-colors cursor-pointer line-clamp-1"
            >
              {property.title}
            </h3>
            <button
              type="button"
              onClick={() => onSelect(property)}
              className="text-[#6e7781] hover:text-[#16191c] p-1 cursor-pointer transition-colors"
              aria-label="View property details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <p className="flex items-center gap-1 text-xs text-[#5a626a] mt-1.5 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#c5a86a] shrink-0" />
            <span>{property.location} {property.subLocation ? `• ${property.subLocation}` : ''}</span>
          </p>

          {/* Quick Specs Chips */}
          <div className="flex items-center gap-3 text-xs text-[#444c55] mt-4 pt-3 border-t border-[#f0ebe1]">
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#c5a86a]" />
              {property.area}
            </span>
            {property.bedrooms && (
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-[#c5a86a]" />
                {property.bedrooms} BHK
              </span>
            )}
            {property.furnishing && (
              <span className="text-[11px] bg-[#f0ebe1] px-2 py-0.5 rounded text-[#5a626a] truncate max-w-[110px]">
                {property.furnishing}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-5 pt-4 border-t border-[#e5ded4] flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelect(property)}
            className="flex-1 py-2 px-3 rounded-lg bg-[#f0ebe1] hover:bg-[#e5ded4] text-[#16191c] text-xs font-semibold transition-colors text-center cursor-pointer"
          >
            Enquire for Details
          </button>

          <a
            id={`whatsapp-card-${property.id}`}
            href={getPropertyWhatsAppUrl(property.title, property.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shrink-0 active:scale-95"
            title="Enquire on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
          </a>
        </div>
      </div>
    </div>
  );
};
