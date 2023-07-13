import getGrid from "../utils/getGrid";
import Square from "./Square";
import { useState } from "react";
import data from "../utils/data";
import Header from "./Header";
import isCorrect from "../utils/isCorrect";
import TargetBox from "./TargetBox";
import MenuItems from "./MenuItems";

export default function Challenge({ url, name }) {
  const [characters, setCharacters] = useState(data.getCharcterDataOf(name));

  const gameOver = characters.reduce(
    (total, current) => total && current.found,
    true
  );

  const [selectedSquare, setSelectedSquare] = useState(null);

  const squares = getGrid(50, 50).map((coords) => (
    <Square
      x={coords[0]}
      y={coords[1]}
      setSelectedSquare={setSelectedSquare}
    ></Square>
  ));
  console.log(selectedSquare);
  const [target, setTarget] = useState(null);

  return (
    <>
      <Header characters={characters}></Header>
      <div
        className="challenge"
        onClick={(e) => {
          setTarget([e.pageX, e.pageY]);
          // console.log([e.pageX, e.pageY]);
        }}
      >
        <div className="squares">{squares}</div>
        <img src={url} alt="" />
        {target ? <TargetBox target={target}></TargetBox> : null}

        {target ? (
          <MenuItems
            target={target}
            characters={characters}
            name={name}
            selectedSquare={selectedSquare}
          ></MenuItems>
        ) : null}
      </div>
    </>
  );
}
