import React, { useState } from 'react';
import { BUSINESS_INFO, getCallNumber, getWhatsAppUrl, getSellWhatsAppUrl, getDirectionsUrl } from '../data/business';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  initialTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialTopic = 'General Enquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'buy',
    propertyType: 'Flat',
    preferredLocation: 'Mayur Vihar Phase I',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepares WhatsApp message for direct instant outreach
    const waText = `Hello Majestic Estates,
My name is ${formData.name}.
Phone: ${formData.phone}
Requirement: ${formData.requirement.toUpperCase()}
Property Type: ${formData.propertyType}
Preferred Location: ${formData.preferredLocation}
Details: ${formData.message || 'Please contact me regarding options.'}`;

    const url = getWhatsAppUrl(waText);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf8f5] border-t border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a86a]">
            Connect With Majestic Estates
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#16191c]">
            Visit Our Mayur Vihar Office or Reach Out Directly
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a626a]">
            Our local advisors are ready to assist you with transparent advice, personalized inventory, and on-ground property visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#e5ded4] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#16191c]">
                Office & Contact Details
              </h3>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#d4cdc3] text-[#c5a86a] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#c5a86a]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6e7781]">
                    Office Address
                  </h4>
                  <p className="text-sm font-medium text-[#16191c] mt-1 leading-relaxed">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-[#5a626a] mt-0.5">
                    Landmark: {BUSINESS_INFO.landmark}
                  </p>
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c5a86a] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Primary Phone / Call */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f0ebe1]">
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#d4cdc3] text-[#c5a86a] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#c5a86a]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6e7781]">
                    Phone Numbers
                  </h4>
                  <a
                    href={`tel:${getCallNumber()}`}
                    className="text-base font-semibold text-[#16191c] hover:text-[#c5a86a] transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                  <p className="text-xs text-[#5a626a] mt-0.5">
                    Call directly for immediate site visits & consultations
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f0ebe1]">
                <div className="p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6e7781]">
                    WhatsApp Fast Desk
                  </h4>
                  <a
                    href={getWhatsAppUrl("Hello Majestic Estates, I would like to enquire about properties.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#16191c] hover:text-[#25D366] transition-colors block mt-0.5"
                  >
                    +91 98118 73297
                  </a>
                  <p className="text-xs text-[#5a626a] mt-0.5">
                    Receive property floor plans, photos & video walkthroughs
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f0ebe1]">
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#d4cdc3] text-[#c5a86a] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#c5a86a]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6e7781]">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-medium text-[#16191c] hover:text-[#c5a86a] transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#f0ebe1]">
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#d4cdc3] text-[#c5a86a] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#c5a86a]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6e7781]">
                    Office Timings
                  </h4>
                  <p className="text-sm font-medium text-[#16191c] mt-0.5">
                    {BUSINESS_INFO.hours}
                  </p>
                  <p className="text-xs text-[#5a626a] mt-0.5">
                    Sunday site visits available upon appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="p-5 rounded-2xl bg-[#16191c] text-[#faf8f5] border border-[#c5a86a]/40 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-serif text-base font-bold text-[#faf8f5]">Are you an owner?</p>
                <p className="text-xs text-[#d4cdc3]">List your property for sale or rent with us.</p>
              </div>
              <a
                href={getSellWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#c5a86a] hover:bg-[#b39556] text-[#16191c] text-xs font-semibold shrink-0"
              >
                List Property
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#e5ded4] shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a86a]">
                Personalized Property Inquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#16191c] mt-1">
                Tell Us Your Specific Requirement
              </h3>
              <p className="text-xs sm:text-sm text-[#5a626a] mt-1 mb-6">
                Fill this quick form and our consultant will connect with relevant property options tailored to your preferred sector and budget.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#16191c]">Requirement Submitted!</h4>
                  <p className="text-sm text-[#5a626a]">
                    WhatsApp has opened with your details. If you did not get redirected, you can directly message us below.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg bg-[#16191c] text-[#c5a86a] text-xs font-semibold"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98118 73297"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a]"
                      />
                    </div>
                  </div>

                  {/* Requirement Track & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                        Requirement Type
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] cursor-pointer"
                      >
                        <option value="buy">Looking to BUY</option>
                        <option value="rent">Looking to RENT</option>
                        <option value="sell">Want to SELL / LEASE OUT</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                        Property Segment
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] cursor-pointer"
                      >
                        <option value="Flat">Society Flat (2 / 3 / 4 BHK)</option>
                        <option value="Builder Floor">Independent Builder Floor</option>
                        <option value="Commercial Office">Commercial Office Space</option>
                        <option value="Commercial Shop">Commercial Retail Shop</option>
                        <option value="Plot">Residential / Commercial Plot</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Location */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                      Target Location
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] cursor-pointer"
                    >
                      <option value="Mayur Vihar Phase I">Mayur Vihar Phase I (Societies & Pockets)</option>
                      <option value="Pandav Nagar">Pandav Nagar (East Delhi)</option>
                      <option value="Mayur Vihar Phase II / III">Mayur Vihar Phase II / Phase III</option>
                      <option value="Noida Sector 15 / 16 / 18">Noida (Adjacent to Mayur Vihar)</option>
                      <option value="Other Delhi NCR">Other East Delhi / NCR Location</option>
                    </select>
                  </div>

                  {/* Message details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16191c] mb-1.5">
                      Budget & Specific Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Budget around 1.5 Cr, prefer gated society with lift and parking near metro..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#d4cdc3] text-sm text-[#16191c] focus:outline-none focus:border-[#c5a86a] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#16191c] hover:bg-[#23272b] text-[#c5a86a] border border-[#c5a86a]/40 text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-98"
                    >
                      <Send className="w-4 h-4 text-[#c5a86a]" />
                      <span>Send Enquiry to Majestic Estates</span>
                    </button>
                    <p className="text-center text-[11px] text-[#6e7781] mt-2">
                      Instant response on WhatsApp / Phone • No unsolicited spam
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
