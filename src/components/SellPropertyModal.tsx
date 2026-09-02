import React, { useState } from 'react';
import { getSellWhatsAppUrl } from '../data/business';
import { X, Building2, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';

interface SellPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellPropertyModal: React.FC<SellPropertyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    propertyType: 'Flat',
    location: 'Mayur Vihar Phase I',
    floor: '',
    expectedPrice: '',
    ownershipType: 'Freehold',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `Property Listing from Owner:
- Owner Name: ${formData.ownerName}
- Phone: ${formData.phone}
- Property: ${formData.propertyType}
- Location: ${formData.location}
- Ownership: ${formData.ownershipType}
- Expected Price: ${formData.expectedPrice || 'To be discussed'}
- Notes: ${formData.notes || 'Looking for valuation & buyers'}`;

    const url = getSellWhatsAppUrl(details);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#e5ded4] overflow-hidden">
        {/* Header */}
        <div className="bg-[#16191c] text-[#faf8f5] p-6 flex items-start justify-between border-b border-[#c5a86a]/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c5a86a] font-semibold">
              Owner Listing Desk
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#faf8f5] mt-0.5">
              Discuss Your Property With Us
            </h3>
            <p className="text-xs text-[#d4cdc3] mt-1">
              Connect with Majestic Estates to find qualified buyers & tenants in Mayur Vihar & Delhi NCR.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#d4cdc3] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
              <h4 className="font-serif text-xl font-bold text-[#16191c]">Details Forwarded!</h4>
              <p className="text-sm text-[#5a626a] max-w-md mx-auto">
                WhatsApp has been launched with your listing summary. Our Mayur Vihar desk will contact you to schedule an on-ground property visit.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#16191c] text-[#c5a86a] font-semibold text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  >
                    <option value="Society Flat (2 BHK)">Society Flat (2 BHK)</option>
                    <option value="Society Flat (3 BHK)">Society Flat (3 BHK)</option>
                    <option value="Builder Floor">Independent Builder Floor</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Commercial Retail Shop">Commercial Retail Shop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Location / Society Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samachar Apts, Mayur Vihar"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Title / Documentation
                  </label>
                  <select
                    value={formData.ownershipType}
                    onChange={(e) => setFormData({ ...formData, ownershipType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  >
                    <option value="Freehold Title">Freehold Title</option>
                    <option value="Cooperative Society (CGHS)">Cooperative Society (CGHS)</option>
                    <option value="DDA Allotment">DDA Allotment</option>
                    <option value="Power of Attorney">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16191c] mb-1">
                    Expected Price / Demand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.75 Cr or Negotiable"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#16191c] mb-1">
                  Additional Details (Floor, Facing, Parking)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2nd floor with lift, park facing, covered car parking..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#5a626a] hover:bg-[#f0ebe1] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="submit-sell-property-btn"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#c5a86a] border border-[#c5a86a]/40 text-xs font-semibold shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#c5a86a]" />
                  <span>Submit Listing</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
