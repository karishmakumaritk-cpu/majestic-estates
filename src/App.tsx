import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertiesSection } from './components/PropertiesSection';
import { CommercialSection } from './components/CommercialSection';
import { ServicePillars } from './components/ServicePillars';
import { LocalAreasSection } from './components/LocalAreasSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { SellPropertyModal } from './components/SellPropertyModal';
import { FloatingContactBar } from './components/FloatingContactBar';
import { PROPERTIES } from './data/properties';
import { Property, FilterState } from './types';

export function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    transaction: 'all',
    propertyType: 'all',
    location: 'all',
    budgetRange: 'all',
    searchQuery: '',
  });

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreBuy = () => {
    handleFilterChange({ transaction: 'buy', category: 'all' });
    scrollToSection('properties');
  };

  const handleExploreRent = () => {
    handleFilterChange({ transaction: 'rent', category: 'all' });
    scrollToSection('properties');
  };

  const handleExploreCommercial = () => {
    handleFilterChange({ category: 'commercial', transaction: 'all' });
    scrollToSection('properties');
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#16191c] font-sans antialiased selection:bg-[#c5a86a]/30 selection:text-[#16191c]">
      {/* Navigation Header */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenSellModal={() => setIsSellModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Quick Filter & Visuals */}
        <Hero
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={() => scrollToSection('properties')}
          onOpenSellModal={() => setIsSellModalOpen(true)}
        />

        {/* Featured Properties Showcase (Residential & Commercial) */}
        <PropertiesSection
          properties={PROPERTIES}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSelectProperty={(property) => setSelectedProperty(property)}
        />

        {/* 3 Core Transaction Tracks: Buy, Rent, Sell */}
        <ServicePillars
          onExploreBuy={handleExploreBuy}
          onExploreRent={handleExploreRent}
          onOpenSellModal={() => setIsSellModalOpen(true)}
        />

        {/* Specialized Commercial Properties Hub (Offices & Shops) */}
        <CommercialSection
          onExploreCommercial={handleExploreCommercial}
        />

        {/* Local Area Focus (Mayur Vihar Phase I, Pandav Nagar, Noida, etc.) */}
        <LocalAreasSection />

        {/* Trust, Credentials, and Why Choose Majestic Estates */}
        <TrustSection />

        {/* Contact & Office Visit Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenSellModal={() => setIsSellModalOpen(true)}
      />

      {/* Floating Call & WhatsApp Desk */}
      <FloatingContactBar />

      {/* Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <SellPropertyModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
      />
    </div>
  );
}

export default App;
