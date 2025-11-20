import { useState, useEffect, useRef } from "react";

export function useGameTimer(isRunning: boolean, isGameOver: boolean, score: number, setIsGameOver: () => void, setIsRunning: (value: boolean) => void) {
  // Start with a shorter base time so the drain feels faster.
  const [timeRemaining, setTimeRemaining] = useState(2.5);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const startingTimeRef = useRef<number>(2.5);

  useEffect(() => {
    if (isRunning && !isGameOver) {
      // Calculate level based on score (every 20 points = 1 level)
      const level = Math.floor(score / 20);
      startTimeRef.current = Date.now();
      startingTimeRef.current = timeRemaining;
      
      timerIntervalRef.current = setInterval(() => {
        const elapsedRealSeconds = (Date.now() - startTimeRef.current) / 1000;

        // Drain faster: base drain 1.5s per real second, and increase with level.
        const levelMultiplier = 1 + (level * 0.2);
        const drainRate = 1.5 * levelMultiplier;
        const newTime = startingTimeRef.current - (elapsedRealSeconds * drainRate);
        
        if (newTime <= 0) {
          setTimeRemaining(0);
          setIsGameOver();
          setIsRunning(false);
          if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
          }
        } else {
          setTimeRemaining(newTime);
        }
      }, 50);
      
      return () => {
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }
      };
    }
  }, [isRunning, isGameOver, score]);

  return { timeRemaining, setTimeRemaining };
}
