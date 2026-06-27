"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "/images/media__1782575638080.jpg", width: 800, height: 1200 },
  { src: "/images/media__1782575637944.jpg", width: 800, height: 1200 },
  { src: "/images/media__1782575638043.jpg", width: 800, height: 1200 },
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-primary mb-4">Capturing Moments</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => setIndex(i)}
            >
              <div
                className="w-full bg-gray-200 transition-transform duration-700 group-hover:scale-110"
                style={{
                  aspectRatio: `${photo.width} / ${photo.height}`,
                  backgroundImage: `url(${photo.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm font-poppins uppercase tracking-widest text-sm">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos.map(p => ({ src: p.src }))}
        />
      </div>
    </section>
  );
}
