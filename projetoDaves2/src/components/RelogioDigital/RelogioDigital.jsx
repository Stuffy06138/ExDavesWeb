import { useState } from 'react'
import { useEffect } from 'react'
import './RelogioDigital.css'
import React from 'react'

function RelogioDigital () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock">
      <h2>Relógio Digital</h2>
      <p className="time">{formatTime(time)}</p>
    </div>
  );
};

export default RelogioDigital;