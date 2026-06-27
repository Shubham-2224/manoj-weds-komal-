"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    const tryPlay = async () => {
      try {
        if (audioRef.current && audioRef.current.paused) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        // Autoplay blocked, wait for user interaction
      }
    };

    // Try immediately
    tryPlay();

    // Fallback: try on first user interaction
    const handleInteraction = () => {
      tryPlay();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ensure the music file is placed in public/music/ */}
      <audio ref={audioRef} loop src="/music/apna-bana-le-piya.mp4" />
      <button
        onClick={togglePlay}
        className="bg-primary/90 text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-md"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}
