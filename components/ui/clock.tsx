import React, { useEffect, useState } from 'react';
export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
        <div className="clock">
          <p className="text-6xl font-normal text-neutral-400">{time}</p>
        </div>    
  );
}
