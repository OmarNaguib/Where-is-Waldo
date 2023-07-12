import getGrid from "../utils/getGrid";
import Square from "./Square";

export default function Challenge({ url, name }) {
  const squares = getGrid(50, 50).map((coords) => (
    <Square x={coords[0]} y={coords[1]}></Square>
  ));

  return (
    <div className="challenge">
      <div className="squares">{squares}</div>
      <img src={url} alt="" />
    </div>
  );
}
