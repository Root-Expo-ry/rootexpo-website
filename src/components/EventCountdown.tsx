import { useEffect, useState } from 'react';

export default function EventCountdown() {
  const eventDate = new Date('2026-11-17T11:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
<div className="text-center relative">
  <div className="flex justify-center gap-2">
    <div className="flex flex-col items-center">
      <span className="text-lg text-accent -mb-1">{timeLeft.days}</span>
      <span className="text-sm">Days</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-lg text-accent -mb-1">{timeLeft.hours}</span>
      <span className="text-sm">Hours</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-lg text-accent -mb-1">{timeLeft.minutes}</span>
      <span className="text-sm">Mins</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-lg text-accent -mb-1">{timeLeft.seconds}</span>
      <span className="text-sm">Secs</span>
    </div>
  </div>
</div>
  );
}