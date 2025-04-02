import React, { useState, useEffect } from "react";
import "./BarraProgresso.css";

function BarraProgresso () {
    const [progress, setProgress] = useState(50);
  
    const increase = () => setProgress((prev) => Math.min(100, prev + 10));
    const decrease = () => setProgress((prev) => Math.max(0, prev - 10));
  
    return (
      <div className="progress-bar-container">
        <h2>Barra de Progresso</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}%</p>
        <button onClick={decrease}>Diminuir</button>
        <button onClick={increase}>Aumentar</button>
      </div>
    );
  };

export default BarraProgresso;