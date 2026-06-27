"use client";
import { motion } from "framer-motion";
import { Map, Navigation } from "lucide-react";

export default function VenueMap() {
  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="venue">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">The Venues</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Side by side layout always (flex-row) */}
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-8 justify-center">
          
          {/* Haldi Venue */}
          <div className="flex-1 flex flex-col bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-primary/20 w-1/2">
            <div className="p-3 sm:p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-br from-[#FFF8F3] to-[#F6E7D8]">
              <h3 className="font-playfair text-lg sm:text-2xl md:text-3xl text-wedding-text mb-1 sm:mb-2">Haldi</h3>
              <p className="font-poppins font-semibold text-xs sm:text-sm md:text-base text-wedding-text mb-1 sm:mb-2">
                Balaji Lawns
              </p>
              <p className="font-poppins text-[10px] sm:text-xs md:text-sm text-wedding-text/80 mb-2 sm:mb-4 leading-snug sm:leading-relaxed flex-grow">
                Ranjangaon, <br className="hidden sm:block" />
                Chhatrapati Sambhaji Nagar
              </p>
            </div>
            <div className="w-full h-40 sm:h-64 md:h-96">
               <iframe 
                  src="https://maps.google.com/maps?q=Balaji%20Lawns,%20Ranjangaon,%20Chhatrapati%20Sambhaji%20Nagar&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>

          {/* Wedding Venue */}
          <div className="flex-1 flex flex-col bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-primary/20 w-1/2">
            <div className="p-3 sm:p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-br from-[#FFF8F3] to-[#F6E7D8]">
              <h3 className="font-playfair text-lg sm:text-2xl md:text-3xl text-wedding-text mb-1 sm:mb-2">Wedding</h3>
              <p className="font-poppins font-semibold text-xs sm:text-sm md:text-base text-wedding-text mb-1 sm:mb-2">
                Gajanan Heritage
              </p>
              <p className="font-poppins text-[10px] sm:text-xs md:text-sm text-wedding-text/80 mb-2 sm:mb-4 leading-snug sm:leading-relaxed flex-grow">
                Kannad Road, <br className="hidden sm:block" />
                Chhatrapati Sambhaji Nagar
              </p>
            </div>
            <div className="w-full h-40 sm:h-64 md:h-96">
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
      </div>
    </section>
  );
}
