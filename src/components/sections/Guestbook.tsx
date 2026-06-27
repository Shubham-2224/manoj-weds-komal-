"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Wishing you a lifetime of love and happiness.", name: "Rahul Sharma" },
  { text: "May your journey together be filled with beautiful moments.", name: "Priya Verma" },
  { text: "Two beautiful souls coming together. So happy for you both!", name: "Aman & Neha" },
];

export default function Guestbook() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="guestbook">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <Quote size={48} className="text-primary/20 mx-auto mb-8" />
        
        <div className="h-40 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-playfair text-2xl md:text-3xl text-wedding-text mb-6 italic leading-relaxed px-4">
                "{testimonials[current].text}"
              </p>
              <p className="font-poppins text-sm uppercase tracking-widest text-primary">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-primary/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
