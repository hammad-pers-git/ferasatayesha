import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '923005519820',
  defaultMessage = 'Hello Ferasat, I would like to inquire about a psychological consultation.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="WhatsApp direct chat"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-7 md:right-7 z-50 select-none"
    >
      {/* Fixed Circular Green WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ferasat Ayesha on WhatsApp"
        title="Chat on WhatsApp"
        className="relative w-13 h-13 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 group focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle animated ambient pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none group-hover:opacity-0"
          style={{ animationDuration: '3s' }}
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 fill-current text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.677.15-.2.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.101-.201.05-.376-.025-.526-.075-.151-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.229 3.11.151.201 2.123 3.243 5.144 4.548.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351z" />
          <path d="M12.004 2C6.48 2 2 6.478 2 12c0 1.765.459 3.486 1.332 5.006L2 22l5.12-1.343A9.957 9.957 0 0 0 12.004 22c5.522 0 10.002-4.478 10.002-10s-4.48-10-10.002-10zm0 18.25c-1.524 0-3.021-.403-4.333-1.166l-.311-.18-3.218.844.858-3.137-.197-.314A8.204 8.204 0 0 1 3.75 12c0-4.551 3.702-8.25 8.254-8.25 4.551 0 8.252 3.699 8.252 8.25 0 4.551-3.701 8.25-8.252 8.25z" />
        </svg>
      </a>
    </aside>
  );
};
