import getGrid from "../utils/getGrid";
import Square from "./Square";
import { useState } from "react";
import data from "../utils/data";
import Header from "./Header";

export default function Challenge({ url, name }) {
  const [characters, setCharacters] = useState(data.getCharcterDataOf(name));
  const squares = getGrid(50, 50).map((coords) => (
    <Square x={coords[0]} y={coords[1]}></Square>
  ));
  const [target, setTarget] = useState(null);

  return (
    <>
      <Header characters={characters}></Header>
      <div
        className="challenge"
        onClick={(e) => {
          setTarget([e.pageX, e.pageY]);
          console.log([e.pageX, e.pageY]);
        }}
      >
        <div className="squares">{squares}</div>
        <img src={url} alt="" />
        {target ? (
          <div
            className="target-box"
            style={{
              top: `calc(${target[1]}px - 5%)`,
              left: `calc(${target[0]}px - 3%)`,
            }}
          ></div>
        ) : null}
      </div>
    </>
  );
}
