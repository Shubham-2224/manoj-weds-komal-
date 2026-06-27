"use client";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function GiftSection() {
  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden text-center" id="registry">
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary border border-primary/30"
        >
          <Gift size={40} />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-great-vibes text-5xl md:text-7xl text-primary mb-8"
        >
          Gift Registry
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-xl md:text-2xl text-wedding-text leading-relaxed max-w-2xl px-4"
        >
          "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, your blessings are more than enough."
        </motion.p>
      </div>
    </section>
  );
}
