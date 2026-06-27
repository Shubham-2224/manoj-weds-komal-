"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented by browser. User interaction required.");
      }
    };
    playAudio();
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
      {/* Ensure the music file is named 'apna-bana-le-piya.mp3' and placed in public/music/ */}
      <audio ref={audioRef} loop src="/music/apna-bana-le-piya.mp3" />
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
