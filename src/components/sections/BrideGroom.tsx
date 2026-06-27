"use client";
import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="couple">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Manoj & Komal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4] p-3 rounded-t-full border-4 border-primary/20 shadow-2xl overflow-hidden group">
              <div 
                className="w-full h-full rounded-t-full overflow-hidden relative"
                style={{
                  backgroundImage: "url('/images/media__1782575638043.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center top"
                }}
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <p className="font-cormorant text-2xl text-accent font-semibold mb-4 uppercase tracking-widest">
              Two Souls, One Heart
            </p>
            <h3 className="font-playfair text-4xl md:text-5xl text-wedding-text mb-6">
              A Match Made in Heaven
            </h3>
            <p className="font-poppins text-wedding-text/70 leading-relaxed mb-8 max-w-lg">
              We are so excited to start this new chapter of our lives together. 
              Our journey has been filled with love, laughter, and beautiful memories. 
              We can't wait to celebrate our special day surrounded by our beloved family and friends.
            </p>
            <div className="font-great-vibes text-4xl text-primary">
              M & K
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
