"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PetalProps {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export default function Petals() {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 10 + Math.random() * 15,
      color: Math.random() > 0.5 ? "#B76E79" : "#F6E7D8", // Accent (Rose Gold) or Secondary (Soft cream)
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%]"
          initial={{
            x: `${petal.x}vw`,
            y: "-10vh",
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            x: `${petal.x + (Math.random() * 20 - 10)}vw`,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size * 1.2,
            backgroundColor: petal.color,
            borderRadius: "50% 0 50% 50%",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
      ))}
    </div>
  );
}
