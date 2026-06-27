"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";

const events = [
  {
    title: "Mehendi",
    date: "5 June 2026",
    time: "4:00 PM",
    venue: "Gajanan Heritage",
    themeClass: "bg-green-500/10 border-green-500/30 text-green-700",
    iconColor: "text-green-600",
  },
  {
    title: "Sangeet",
    date: "5 June 2026",
    time: "7:00 PM",
    venue: "Gajanan Heritage",
    themeClass: "bg-purple-500/10 border-purple-500/30 text-purple-700",
    iconColor: "text-purple-600",
  },
  {
    title: "Haldi",
    date: "6 June 2026",
    time: "10:00 AM",
    venue: "Gajanan Heritage",
    themeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-700",
    iconColor: "text-yellow-600",
  },
  {
    title: "Wedding Ceremony",
    date: "7 June 2026",
    time: "6:00 PM",
    venue: "Gajanan Heritage",
    themeClass: "bg-primary/10 border-primary/30 text-primary",
    iconColor: "text-primary",
  },
];

export default function WeddingEvents() {
  return (
    <section className="py-24 bg-wedding-bg relative overflow-hidden" id="events">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Wedding Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`w-full md:w-[calc(33.333%-2rem)] max-w-sm rounded-2xl p-8 backdrop-blur-md border ${event.themeClass} flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group`}
            >
               <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="relative z-10 w-full">
                  <h3 className="font-playfair text-3xl font-semibold mb-6">{event.title}</h3>
                  
                  <div className="space-y-4 font-poppins text-wedding-text/80">
                    <div className="flex items-center justify-center gap-3">
                      <CalendarDays className={event.iconColor} size={20} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Clock className={event.iconColor} size={20} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className={event.iconColor} size={20} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
