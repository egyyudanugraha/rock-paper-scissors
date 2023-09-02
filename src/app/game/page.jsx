'use client';

import { useState, useEffect } from 'react';
import ComputerSection from "@/components/ComputerSection"
import PlayerSection from "@/components/PlayerSection"
import Score from "@/components/Score"

const Game = () => {
  const actions = ['rock', 'paper', 'scissors'];

  const [choicePlayer, setChoicePlayer] = useState('');
  const [choiceCom, setChoiceCom] = useState('');
  const [image, setImage] = useState('https://egyyudanugraha.site/icon.svg');

  const [score, setScore] = useState({
    computer: 0,
    player: 0
  });

  const handleSelectPlayer = (name) => {
    setChoicePlayer(name);
    const result = Math.floor(Math.random() * 3);
    setChoiceCom(actions[result]);
  }

  const determineWinner = (playerChoice, computerChoice) => {
    const scoreReference = {
      rock: { rock: 0, paper: 0, scissors: 1 },
      paper: { rock: 1, paper: 0, scissors: 0 },
      scissors: { rock: 0, paper: 1, scissors: 0 },
    };

    setScore((prev) => ({
      computer: prev.computer + scoreReference[computerChoice][playerChoice],
      player: prev.player + scoreReference[playerChoice][computerChoice]
    }))
  };

  useEffect(() => {
    if (choiceCom !== '') {
      const imageRandom = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * actions.length);
        setImage(`/${actions[randomIndex]}.png`);
      }, 10);

      setTimeout(() => {
        clearInterval(imageRandom);
        setImage(`/${choiceCom}.png`);
        determineWinner(choicePlayer, choiceCom);
      }, 1000);

      return () => clearInterval(imageRandom);
    }
  }, [choiceCom, choicePlayer]);

  return (
    <div className="flex flex-col items-center w-full p-4 h-screen justify-between">
      <ComputerSection urlImage={image} />
      <Score player={score.player} computer={score.computer} />
      <PlayerSection actions={actions} handleMatch={handleSelectPlayer} selected={choicePlayer} />
    </div>
  )
}

export default Game;