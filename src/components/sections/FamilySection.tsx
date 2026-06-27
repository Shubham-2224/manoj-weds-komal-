"use client";
import { motion } from "framer-motion";

const families = {
  bride: [
    { name: "Mr. & Mrs. Dolas", relation: "Parents" }
  ],
  groom: [
    { name: "Mr. & Mrs. Jadhav", relation: "Parents" }
  ]
};

export default function FamilySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="family">
       <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">With Blessings Of</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 mt-20">
             {/* Groom Family */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="text-center flex-1"
             >
                <h3 className="font-playfair text-3xl text-wedding-text mb-8 text-primary border-b border-primary/20 pb-4 inline-block px-8">The Jadhav Family</h3>
                <div className="space-y-8">
                   {families.groom.map((f, i) => (
                      <div key={i} className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                         <p className="font-cormorant text-2xl text-wedding-text group-hover:text-primary transition-colors">{f.name}</p>
                         <p className="font-poppins text-sm uppercase tracking-[0.2em] text-wedding-text/50 mt-2">{f.relation}</p>
                      </div>
                   ))}
                </div>
             </motion.div>

             <div className="w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

             {/* Bride Family */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="text-center flex-1"
             >
                <h3 className="font-playfair text-3xl text-wedding-text mb-8 text-primary border-b border-primary/20 pb-4 inline-block px-8">The Dolas Family</h3>
                <div className="space-y-8">
                   {families.bride.map((f, i) => (
                      <div key={i} className="group cursor-default hover:-translate-y-1 transition-transform duration-300">
                         <p className="font-cormorant text-2xl text-wedding-text group-hover:text-primary transition-colors">{f.name}</p>
                         <p className="font-poppins text-sm uppercase tracking-[0.2em] text-wedding-text/50 mt-2">{f.relation}</p>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
