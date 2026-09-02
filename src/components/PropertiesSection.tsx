import React, { useState, useMemo } from 'react';
import { Property, FilterState } from '../types';
import { PropertyCard } from './PropertyCard';
import { getWhatsAppUrl } from '../data/business';
import { Building, Home, Briefcase, MessageSquare, Search, Filter } from 'lucide-react';

interface PropertiesSectionProps {
  properties: Property[];
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Tab Category filter
      if (activeTab !== 'all' && prop.category !== activeTab) {
        return false;
      }
      if (filters.category !== 'all' && prop.category !== filters.category) {
        return false;
      }
      // Transaction type filter
      if (filters.transaction !== 'all') {
        if (filters.transaction === 'buy' && prop.transactionType === 'rent') return false;
        if (filters.transaction === 'rent' && prop.transactionType === 'buy') return false;
      }
      // Property type filter
      if (filters.propertyType !== 'all' && filters.propertyType !== '') {
        if (prop.propertyType.toLowerCase() !== filters.propertyType.toLowerCase()) {
          return false;
        }
      }
      // Location filter
      if (filters.location !== 'all' && filters.location !== '') {
        if (!prop.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
      }
      // Search text filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesLoc = prop.location.toLowerCase().includes(query);
        const matchesType = prop.propertyType.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLoc && !matchesType) return false;
      }

      return true;
    });
  }, [properties, activeTab, filters]);

  const categories = [
    { id: 'all', label: 'All Properties', icon: Building },
    { id: 'residential', label: 'Residential (Flats & Builder Floors)', icon: Home },
    { id: 'commercial', label: 'Commercial (Offices & Shops)', icon: Briefcase },
  ];

  return (
    <section id="properties" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
              Handpicked Portfolios
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#16191c]">
              Featured Properties
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5a626a] max-w-xl">
              Explore residential apartments, independent builder floors, corporate offices, and high-footfall retail shops in Mayur Vihar and Delhi NCR.
            </p>
          </div>

          <a
            id="properties-custom-enquiry-btn"
            href={getWhatsAppUrl("Hello Majestic Estates, I am looking for specific property options in Mayur Vihar / Delhi NCR. Please share available listings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#c5a86a] border border-[#c5a86a]/40 text-xs sm:text-sm font-semibold transition-all shrink-0 self-start md:self-auto"
          >
            <MessageSquare className="w-4 h-4 text-[#c5a86a]" />
            <span>Enquire for Custom Requirements</span>
          </a>
        </div>

        {/* Categories Bar & Quick Filter Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-[#e5ded4] shadow-sm">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`prop-tab-${cat.id}`}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#16191c] text-[#faf8f5] shadow-sm'
                      : 'text-[#5a626a] hover:text-[#16191c] hover:bg-[#f0ebe1]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c5a86a]' : 'text-[#6e7781]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2">
            <select
              value={filters.transaction}
              onChange={(e) => onFilterChange({ transaction: e.target.value as any })}
              className="bg-[#f0ebe1] border border-[#d4cdc3] rounded-lg px-3 py-2 text-xs font-medium text-[#16191c] cursor-pointer focus:outline-none focus:border-[#c5a86a]"
            >
              <option value="all">Buy & Rent</option>
              <option value="buy">For Sale (Buy)</option>
              <option value="rent">For Rent</option>
            </select>

            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange({ propertyType: e.target.value })}
              className="bg-[#f0ebe1] border border-[#d4cdc3] rounded-lg px-3 py-2 text-xs font-medium text-[#16191c] cursor-pointer focus:outline-none focus:border-[#c5a86a]"
            >
              <option value="all">All Types</option>
              <option value="Flat">Flats</option>
              <option value="Apartment">Apartments</option>
              <option value="Builder Floor">Builder Floors</option>
              <option value="Office">Offices</option>
              <option value="Shop">Shops</option>
            </select>

            {(filters.transaction !== 'all' || filters.propertyType !== 'all' || activeTab !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  onFilterChange({ transaction: 'all', propertyType: 'all', location: 'all', budgetRange: 'all', searchQuery: '' });
                }}
                className="text-xs text-[#c86446] hover:underline font-medium px-2 py-1 cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#e5ded4]">
            <Search className="w-12 h-12 text-[#d4cdc3] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#16191c]">No direct matches found</h3>
            <p className="text-sm text-[#5a626a] max-w-md mx-auto mt-1 mb-5">
              We have additional private inventory across Mayur Vihar, East Delhi, and Noida. Connect directly with our team to find your exact match.
            </p>
            <a
              href={getWhatsAppUrl("Hello Majestic Estates, I am looking for properties with specific criteria in Delhi NCR. Please assist.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
