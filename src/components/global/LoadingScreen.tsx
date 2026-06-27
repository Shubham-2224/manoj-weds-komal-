"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wedding-bg"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="font-great-vibes text-6xl md:text-8xl text-primary mb-4 drop-shadow-sm">
              Manoj & Komal
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-playfair text-xl md:text-2xl text-wedding-text tracking-widest uppercase"
            >
              Are Getting Married
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
             <div className="w-16 h-[2px] bg-primary/20 overflow-hidden relative rounded-full">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
             </div>
             <p className="font-poppins text-xs text-wedding-text/60 uppercase tracking-widest">Loading</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
