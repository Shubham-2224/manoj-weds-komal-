"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, CalendarHeart, Sparkles } from "lucide-react";

const milestones = [
  {
    title: "When Our Families Met",
    date: "2 June",
    description: "Two families came together with hopes of a beautiful union. It was the beginning of a lifelong bond.",
    icon: <Heart size={24} className="text-white" />,
    align: "left",
  },
  {
    title: "Our First Meeting",
    date: "18 June",
    description: "We sat down for our first conversation. What started as a formal meeting quickly turned into a genuine connection.",
    icon: <MessageCircle size={24} className="text-white" />,
    align: "right",
  },
  {
    title: "The Engagement Ceremony",
    date: "27 June",
    description: "Surrounded by our loved ones, our union was officially blessed and our beautiful journey together began.",
    icon: <Sparkles size={24} className="text-white" />,
    align: "left",
  },
  {
    title: "The Wedding Day",
    date: "7 June 2026",
    description: "The day we finally tie the knot and promise to be together forever as husband and wife.",
    icon: <CalendarHeart size={24} className="text-white" />,
    align: "right",
  },
];

export default function LoveStory() {
  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="love-story">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Our Love Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-primary/20 hidden md:block" />

          <div className="space-y-12 md:space-y-0 relative z-10">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-center ${
                  milestone.align === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: milestone.align === "left" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className={`w-full ${milestone.align === "left" ? "md:text-right md:items-end" : "md:text-left md:items-start"} flex flex-col`}>
                    <p className="font-cormorant text-xl text-accent font-semibold mb-2">{milestone.date}</p>
                    <h3 className="font-playfair text-3xl text-wedding-text mb-4">{milestone.title}</h3>
                    <p className="font-poppins text-wedding-text/80 leading-relaxed max-w-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>

                {/* Icon in Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#b8952d] flex items-center justify-center z-20 shadow-lg my-6 md:my-0 border-4 border-wedding-bg relative"
                >
                  {milestone.icon}
                </motion.div>

                {/* Empty side for layout */}
                <div className="hidden md:block w-full md:w-1/2 p-6 md:p-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
