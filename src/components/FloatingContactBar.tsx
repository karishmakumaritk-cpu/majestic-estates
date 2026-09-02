import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl, getCallNumber, BUSINESS_INFO } from '../data/business';
import { MessageSquare, Phone, X } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show polite notification popup after 4 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Gentle Floating Notification Widget on desktop */}
      {showNotification && !isDismissed && (
        <div className="fixed bottom-24 right-5 z-40 hidden sm:flex items-start gap-3 bg-white p-4 rounded-2xl shadow-xl border border-[#e5ded4] max-w-xs animate-slideUp">
          <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 fill-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#16191c]">Majestic Estates Desk</p>
            <p className="text-[11px] text-[#5a626a] mt-0.5">
              Looking for verified properties in Mayur Vihar or Pandav Nagar? Chat with us live!
            </p>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={getWhatsAppUrl("Hello Majestic Estates, I am looking for property options in Mayur Vihar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#25D366] hover:underline"
              >
                Start WhatsApp Chat →
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="text-[#8c959f] hover:text-[#16191c] p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button on Desktop / Right Edge */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* Call Button */}
        <a
          id="floating-call-btn"
          href={`tel:${getCallNumber()}`}
          className="w-13 h-13 rounded-full bg-[#16191c] hover:bg-[#23272b] text-[#c5a86a] border border-[#c5a86a]/40 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative"
          title={`Call ${BUSINESS_INFO.primaryPhone}`}
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-15 bg-[#16191c] text-[#faf8f5] text-xs font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#c5a86a]/30">
            Call Office
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl("Hello Majestic Estates, I would like to enquire about properties.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-15 bg-[#16191c] text-[#faf8f5] text-xs font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#c5a86a]/30">
            WhatsApp Instant Desk
          </span>
        </a>
      </div>

      {/* Persistent Mobile Bottom Sticky Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#16191c]/95 backdrop-blur-md border-t border-[#c5a86a]/30 p-2.5 flex items-center gap-2">
        <a
          id="mobile-sticky-call"
          href={`tel:${getCallNumber()}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#23272b] border border-white/10 text-[#faf8f5] flex items-center justify-center gap-2 text-xs font-semibold active:scale-98"
        >
          <Phone className="w-4 h-4 text-[#c5a86a]" />
          <span>Call Office</span>
        </a>

        <a
          id="mobile-sticky-whatsapp"
          href={getWhatsAppUrl("Hello Majestic Estates, I would like to enquire about properties.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs font-semibold active:scale-98 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
};
