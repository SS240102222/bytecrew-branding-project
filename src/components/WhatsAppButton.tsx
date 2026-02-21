'use client';

import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Desktop Tooltip */}
      {showTooltip && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-2 rounded-md text-sm whitespace-nowrap shadow-md pointer-events-none">
          Chat with us on WhatsApp
          {/* Tooltip arrow */}
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-card transform rotate-45"></div>
        </div>
      )}
      
      {/* FAB Button */}
      <a
        href="https://wa.me/923390053646?text=Hi%20ByteCrew%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90"
      >
        {/* Official WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.911 6.918c0 1.914.615 3.776 1.776 5.335L2.707 22.368l5.592-1.649a6.962 6.962 0 005.163 2.009h.006a6.964 6.964 0 006.962-6.962c0-1.861-.721-3.612-2.031-4.923a6.936 6.936 0 00-4.93-2.04zM20.519 3.471C18.556 1.51 15.988.5 13.168.5 6.846.5 1.726 5.623 1.726 11.945c0 2.096.546 4.142 1.595 5.945L0 24l6.305-1.859a11.908 11.908 0 005.863 1.49h.006c6.322 0 11.441-5.124 11.441-11.445 0-3.059-1.192-5.931-3.361-8.094" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
