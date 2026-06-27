"use client";
import { Camera, Globe, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wedding-bg py-12 relative overflow-hidden text-center" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        <h2 className="font-great-vibes text-4xl text-primary mb-6">Manoj & Komal</h2>
        
        <div className="flex gap-6 mb-8 text-primary">
          <a href="#" className="hover:text-accent transition-colors"><Camera size={24} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Globe size={24} /></a>
          <a href="mailto:info@manojkomal.wedding" className="hover:text-accent transition-colors"><Mail size={24} /></a>
          <a href="tel:+919876543210" className="hover:text-accent transition-colors"><Phone size={24} /></a>
        </div>
        
        <p className="font-poppins text-wedding-text/60 text-sm tracking-widest uppercase flex items-center gap-2 justify-center">
          Made with <Heart size={14} className="text-accent fill-accent" /> for Manoj & Komal
        </p>

        <div className="mt-16 pt-8 border-t border-primary/20 w-full text-center space-y-3">
          <p className="font-poppins text-[11px] md:text-xs text-primary/80 uppercase tracking-[0.2em] font-semibold">
            Customize your wedding website with us
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 font-poppins text-xs text-wedding-text/50">
            <span>Developed by <span className="font-medium text-wedding-text/70">Shubham Desai</span></span>
            <span className="hidden md:inline opacity-50">•</span>
            <a href="tel:7219429987" className="hover:text-primary transition-colors flex items-center gap-1">
              <Phone size={12} /> 7219429987
            </a>
            <span className="hidden md:inline opacity-50">•</span>
            <a href="https://instagram.com/shubham.d_18" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Insta: @shubham.d_18
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
