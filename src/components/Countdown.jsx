import React, { useState, useEffect } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2024-12-31T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-4 md:gap-8 justify-center my-8 text-chai-brown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-serif font-bold">{value}</span>
          <span className="text-xs uppercase tracking-widest opacity-60">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;