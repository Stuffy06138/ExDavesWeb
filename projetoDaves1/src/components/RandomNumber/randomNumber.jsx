import { useState } from 'react'
import './RandomNumber.css'

function RandomNumber ({ min, max }) {
    const [number, setNumber] = useState(
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  
    return (
      <div className="container">
        <h2 className="title">Valor Aleatório</h2>
        <p className="text"><strong>Valor Mínimo:</strong> {min}</p>
        <p className="text"><strong>Valor Máximo:</strong> {max}</p>
        <p className="value">Valor Escolhido: {number}</p>
      </div>
    );
  };

  export default RandomNumber;