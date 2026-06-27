"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

interface Props {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-4xl font-playfair text-primary">It's Wedding Day!</span>;
    } else {
      return (
        <div className="flex gap-4 md:gap-8 justify-center">
          <TimeBox value={days} label="Days" />
          <TimeBox value={hours} label="Hours" />
          <TimeBox value={minutes} label="Minutes" />
          <TimeBox value={seconds} label="Seconds" />
        </div>
      );
    }
  };

  if (!isClient) return null; // Hydration mismatch fix

  return <Countdown date={new Date(targetDate)} renderer={renderer} />;
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-primary/30 rounded-xl p-3 md:p-5 min-w-[70px] md:min-w-[100px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <span className="font-cormorant text-4xl md:text-6xl text-primary font-semibold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="font-poppins text-xs md:text-sm uppercase tracking-wider text-secondary mt-1">
        {label}
      </span>
    </div>
  );
}
