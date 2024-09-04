import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">
        Zamanlayıcı:{seconds} 0s
      </div>
      <div className="flex justify-between">
        <button className="text-amber-500 font-bold" onClick={handleStop}>
          Durdur
        </button>
        <button className="text-green-500 font-bold" onClick={handleStart}>
          Başlat
        </button>
      </div>
    </div>
  );
}
