"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is the dress code?", answer: "We request our guests to dress in formal traditional or western attire. Feel free to follow the color themes mentioned for the events!" },
  { question: "Is there parking available at the venue?", answer: "Yes, valet parking is available at all event venues for your convenience." },
  { question: "Will accommodation be provided?", answer: "Yes, we have arranged accommodation for outstation guests at the Royal Palace Hotel. Please let us know in your RSVP." },
  { question: "How can we contact you for any queries?", answer: "You can reach out to Rahul Sharma at +91 98765 43210 or email us at info@manojkomal.wedding" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Questions & Answers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-primary/20 rounded-2xl overflow-hidden bg-wedding-bg/50"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between font-playfair text-lg text-wedding-text hover:bg-primary/5 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 text-primary ${openIndex === i ? "rotate-180" : ""}`} size={20} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-wedding-text/70 font-poppins text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
