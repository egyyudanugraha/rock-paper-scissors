'use client';

import { useState, useEffect } from 'react';
import ComputerSection from "@/components/ComputerSection"
import PlayerSection from "@/components/PlayerSection"
import Score from "@/components/Score"

const Game = () => {
  const actions = ['rock', 'paper', 'scissors'];
  const scoreReference = {
    rock: { rock: 0, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0 },
  };

  const [choicePlayer, setChoicePlayer] = useState('');
  const [choiceCom, setChoiceCom] = useState('');

  const [score, setScore] = useState({
    computer: 0,
    player: 0
  });

  const handleSelectPlayer = (name) => {
    setChoicePlayer(name);
    const result = Math.floor(Math.random() * 3);
    setChoiceCom(actions[result]);

    determineWinner(name, actions[result])
  }

  const determineWinner = (playerChoice, computerChoice) => {
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setScore((prev) => ({
        ...prev,
        player: prev.player + 1,
      }))
    } else if (
      (computerChoice === 'rock' && playerChoice === 'scissors') ||
      (computerChoice === 'paper' && playerChoice === 'rock') ||
      (computerChoice === 'scissors' && playerChoice === 'paper')
    ) {
      setScore((prev) => ({
        ...prev,
        computer: prev.computer + 1,
      }))
    }
  };

  
  return (
    <div className="flex flex-col items-center w-full p-4 h-screen justify-between">
      <ComputerSection selected={choiceCom} />
      <Score player={score.player} computer={score.computer} />
      <PlayerSection actions={actions} handleMatch={handleSelectPlayer} selected={choicePlayer} />
    </div>
  )
}

export default Game