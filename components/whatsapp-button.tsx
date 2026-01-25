"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31639105393?text=Hallo!%20Ik%20ben%20geïnteresseerd%20in%20photobox%20verhuur%20voor%20mijn%20event."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  );
}
