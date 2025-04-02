import React, { useState, useEffect } from "react";
import "./Votacao.css";

function SistemaVotacao () {
    const initialVotes = {
      opcao1: 0,
      opcao2: 0,
      opcao3: 0,
    };
  
    const [votes, setVotes] = useState(() => {
      const storedVotes = localStorage.getItem("votes");
      return storedVotes ? JSON.parse(storedVotes) : initialVotes;
    });
  
    useEffect(() => {
      localStorage.setItem("votes", JSON.stringify(votes));
    }, [votes]);
  
    const vote = (option) => {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [option]: prevVotes[option] + 1,
      }));
    };
  
    return (
      <div className="voting-system">
        <h2>Sistema de Votação</h2>
        <div className="options">
          <div>
            <button onClick={() => vote("opcao1")}>Opção 1</button>
            <p>Votos: {votes.opcao1}</p>
          </div>
          <div>
            <button onClick={() => vote("opcao2")}>Opção 2</button>
            <p>Votos: {votes.opcao2}</p>
          </div>
          <div>
            <button onClick={() => vote("opcao3")}>Opção 3</button>
            <p>Votos: {votes.opcao3}</p>
          </div>
        </div>
      </div>
    );
  };

export default SistemaVotacao;