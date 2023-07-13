import data from "../utils/data";
import isCorrect from "../utils/isCorrect";

export default function Square({ x, y }) {
  return (
    <div
      className="square"
      onClick={() => {
        // console.log({ x, y });
        // data.getCorrectSquares("beach");
        // console.log("here");
        // console.log();
        console.log(isCorrect(data.getCorrectSquaresOf("beach"), [x, y]));
      }}
    ></div>
  );
}
