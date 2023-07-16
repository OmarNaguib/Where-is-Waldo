import { useState } from "react";
import data from "../utils/data";

import Header from "./Header";
import TargetBox from "./TargetBox";
import MenuItems from "./MenuItems";
import Squares from "./Squares";
import EndMessage from "./EndMessage";

export default function Challenge({ url, name, time }) {
  const [characters, setCharacters] = useState(data.getCharcterDataOf(name));

  const gameOver = characters.reduce(
    (total, current) => total && current.found,
    true
  );

  const [selectedSquare, setSelectedSquare] = useState(null);

  console.log(selectedSquare);
  const [target, setTarget] = useState(null);

  return (
    <>
      <Header characters={characters} gameOver={gameOver}></Header>
      <div
        className="challenge"
        onClick={(e) => {
          setTarget([e.pageX, e.pageY]);
        }}
      >
        <Squares setSelectedSquare={setSelectedSquare}></Squares>
        <img src={url} alt="" />
        {target ? <TargetBox target={target}></TargetBox> : null}

        {target ? (
          <MenuItems
            target={target}
            characters={characters}
            name={name}
            selectedSquare={selectedSquare}
            setCharacters={setCharacters}
          ></MenuItems>
        ) : null}

        {gameOver ? <EndMessage time={time}></EndMessage> : null}
      </div>
    </>
  );
}
