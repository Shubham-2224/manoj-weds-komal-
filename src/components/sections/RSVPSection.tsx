"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "1",
    attending: "yes",
    meal: "vegetarian",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      if (db) {
        await addDoc(collection(db, "rsvps"), {
          ...formData,
          createdAt: new Date()
        });
      } else {
        // Fallback if Firebase isn't configured
        console.log("RSVP Submitted (No Firebase Config):", formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setStatus("success");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-cover bg-center relative" id="rsvp" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 text-white"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Are You Attending?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-poppins text-white/80 uppercase tracking-widest text-sm md:text-base">Please RSVP by 1st May 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          {status === "success" ? (
            <div className="text-center text-white py-12">
              <h3 className="font-playfair text-4xl mb-4 text-primary">Thank You!</h3>
              <p className="font-poppins text-lg text-white/80">Your RSVP has been successfully received. We can't wait to see you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors" placeholder="+91 9876543210" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Number of Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Will you attend?</label>
                  <select name="attending" value={formData.attending} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <option value="yes">Joyfully Accept</option>
                    <option value="no">Regretfully Decline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Meal Preference</label>
                  <select name="meal" value={formData.meal} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-poppins text-sm mb-2 uppercase tracking-wider">Message for the Couple</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors" placeholder="Leave a wish..." />
              </div>

              {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-primary text-white py-4 rounded-lg font-poppins uppercase tracking-widest hover:bg-[#b8952d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                {status === "submitting" ? "Sending..." : "Submit RSVP"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
