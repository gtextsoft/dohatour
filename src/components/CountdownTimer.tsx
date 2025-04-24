import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate: initialTargetDate, className = '' }: CountdownTimerProps) => {
  const [currentTargetDate, setCurrentTargetDate] = useState(initialTargetDate);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleRestart = () => {
    setCurrentTargetDate(new Date(initialTargetDate));
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +currentTargetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Timer expired
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [currentTargetDate]);

  return (
    <div className="space-y-4">
      <div className={`flex items-center justify-center ${className}`}>
        <div className="grid grid-flow-col gap-2 md:gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-white rounded-lg shadow-md">
            <span className="font-montserrat font-semibold text-lg md:text-3xl text-navy">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-500 font-medium">Days</span>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg shadow-md">
            <span className="font-montserrat font-semibold text-lg md:text-3xl text-navy">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-500 font-medium">Hours</span>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg shadow-md">
            <span className="font-montserrat font-semibold text-lg md:text-3xl text-navy">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-500 font-medium">Mins</span>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg shadow-md">
            <span className="font-montserrat font-semibold text-lg md:text-3xl text-navy">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-500 font-medium">Secs</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  );
};

export default CountdownTimer;
