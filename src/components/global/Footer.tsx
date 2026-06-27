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
        
      </div>
    </footer>
  );
}
