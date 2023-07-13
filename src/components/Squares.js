import Square from "./Square";
import getGrid from "../utils/getGrid";

export default function Squares({ setSelectedSquare }) {
  const squares = getGrid(50, 50).map((coords) => (
    <Square
      x={coords[0]}
      y={coords[1]}
      setSelectedSquare={setSelectedSquare}
    ></Square>
  ));
  return <div className="squares">{squares}</div>;
}
