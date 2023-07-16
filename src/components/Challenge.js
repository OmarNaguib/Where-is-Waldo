import { useState } from "react";
import { differenceInSeconds } from "date-fns";
import data from "../utils/data";

import Header from "./Header";
import TargetBox from "./TargetBox";
import MenuItems from "./MenuItems";
import Squares from "./Squares";
import EndMessage from "./EndMessage";

export default function Challenge({ url, name, startTime }) {
  const [characters, setCharacters] = useState(data.getCharcterDataOf(name));

  const gameOver = characters.reduce(
    (total, current) => total && current.found,
    true
  );

  const [selectedSquare, setSelectedSquare] = useState(null);

  const [target, setTarget] = useState(null);

  const [currentTime, setCurrentTime] = useState(new Date());
  setTimeout(() => {
    if (gameOver) return;
    setCurrentTime(new Date());
  }, 1000);

  const difference = differenceInSeconds(currentTime, startTime);
  const minutes = Math.floor(difference / 60);
  const seconds =
    difference % 60 > 9 ? difference % 60 : "0" + (difference % 60);
  const formattedTime = `${minutes} : ${seconds}`;

  return (
    <>
      <Header
        characters={characters}
        gameOver={gameOver}
        time={formattedTime}
      ></Header>
      <div
        className="challenge"
        onClick={(e) => {
          !target ? setTarget([e.pageX, e.pageY]) : setTarget(null);
        }}
      >
        <Squares setSelectedSquare={setSelectedSquare}></Squares>
        <img src={url} alt="" />
        {target ? <TargetBox target={target}></TargetBox> : null}

        {target ? (
          <MenuItems
            target={target}
            setTarget={setTarget}
            characters={characters}
            name={name}
            selectedSquare={selectedSquare}
            setCharacters={setCharacters}
          ></MenuItems>
        ) : null}

        {gameOver ? <EndMessage time={formattedTime}></EndMessage> : null}
      </div>
    </>
  );
}
