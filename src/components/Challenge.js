import getGrid from "../utils/getGrid";
import Square from "./Square";
import { useState } from "react";
import data from "../utils/data";
import Header from "./Header";
import isCorrect from "../utils/isCorrect";
import TargetBox from "./TargetBox";

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

  const menuItems = characters
    .filter((item) => !item.found)
    .map((item) => (
      <button
        className="menu-item"
        onClick={() => {
          if (
            isCorrect(data.getCorrectSquaresOf(name), selectedSquare, item[0])
          )
            item.found = true;
        }}
      >
        <div className="name">{item[0]}</div>
        <img src={item[1]} alt={item[0]} />
      </button>
    ));

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
          <div
            className="drop-menu"
            style={{
              top: `calc(${target[1]}px + 6%)`,
              left: `calc(${target[0]}px - 4%)`,
            }}
          >
            {menuItems}
          </div>
        ) : null}
      </div>
    </>
  );
}
