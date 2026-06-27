"use client";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/media__1782575637790.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed" // Parallax effect
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="font-playfair text-xl md:text-2xl mb-6 text-secondary/90 tracking-widest uppercase max-w-2xl leading-relaxed"
        >
          Together with their families, joyfully invite you to celebrate the wedding of
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
          className="font-great-vibes text-7xl md:text-9xl text-primary mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          Manoj <span className="text-accent mx-2">&hearts;</span> Komal
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-[1px] bg-primary/50 mb-6" />
          <p className="font-cormorant text-4xl md:text-5xl mb-2 tracking-widest text-secondary">
            7 JUNE 2026
          </p>
          <div className="w-32 h-[1px] bg-primary/50 mt-6 mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <p className="font-poppins text-sm md:text-lg mb-6 uppercase tracking-[0.3em] text-secondary/80">Save the Date</p>
          <CountdownTimer targetDate="2026-06-07T00:00:00" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mt-14 bg-gradient-to-r from-primary to-[#b8952d] text-white px-10 py-4 rounded-full font-poppins text-sm md:text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-300 border border-primary/50"
          onClick={() => {
            document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          RSVP Now
        </motion.button>
      </div>
    </section>
  );
}
