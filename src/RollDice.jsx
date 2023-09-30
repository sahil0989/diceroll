import React, { useState } from "react";
import Dice from "./Dice";

const RollDice = () => {
  const [state, setState] = useState({
    die1: 2,
    rolling: false,
    score: 2,
  });

  const randomFunc = (min, max) => {
    let random = Math.floor(Math.random() * (max * min))
    return random+min;
  }

  const roll = () => {
    const newDice1 = randomFunc(1, 6);
    console.log(newDice1)
    
    const newScore = newDice1;
    setState({
        die1 : newDice1,
        rolling : true,
        score : newScore
    });

    setTimeout(() => {
        setState((prevState) =>({...prevState, rolling : false}))
    }, 1000)
  };

  return (
    <>
      <div className="roll-dice">
        <div className="rolldice-container">
          <Dice face={state.die1 === 1 ? "img1" : state.die1 === 2 ? "img2" :state.die1 === 3 ? "img3" :state.die1 === 4 ? "img4" :state.die1 === 5 ? "img5" : "img6"} rolling={state.rolling} />
        </div>
        <button onClick={roll} disabled={state.rolling}>
          {state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2>Your Score : {state.score}</h2>
      </div>
    </>
  );
};

export default RollDice;
