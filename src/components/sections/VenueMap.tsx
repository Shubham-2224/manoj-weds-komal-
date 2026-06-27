"use client";
import { motion } from "framer-motion";
import { Map, Navigation } from "lucide-react";

export default function VenueMap() {
  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="venue">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">The Venue</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-primary/20">
          
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#FFF8F3] to-[#F6E7D8]">
            <h3 className="font-playfair text-3xl text-wedding-text mb-4">Gajanan Heritage</h3>
            <p className="font-poppins text-wedding-text/80 mb-8 leading-relaxed">
              Kannad Road, <br/>
              Chhatrapati Sambhaji Nagar, Maharashtra, India
            </p>
            
            <div className="space-y-4">
              <a 
                href="#"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-poppins uppercase tracking-widest text-sm hover:bg-[#b8952d] transition-colors shadow-md"
              >
                <Navigation size={18} />
                Get Directions
              </a>
              <a 
                href="#"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-white text-primary py-3 px-6 rounded-full font-poppins uppercase tracking-widest text-sm border border-primary hover:bg-primary/5 transition-colors"
              >
                <Map size={18} />
                Open in Maps
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-80 md:h-auto min-h-[400px]">
             {/* Google Maps Embed */}
             <iframe 
                src="https://maps.google.com/maps?q=Gajanan%20Heritage,%20Kannad%20Road,%20Chhatrapati%20Sambhaji%20Nagar&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
