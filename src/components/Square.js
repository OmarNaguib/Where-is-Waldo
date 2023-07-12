import correctSquares from "../utils/correctSquares";
import isCorrect from "../utils/isCorrect";

export default function Square({ x, y }) {
  return (
    <div
      className="square"
      onClick={() => {
        console.log({ x, y });
        console.log(isCorrect(correctSquares("beach"), [x, y]));
      }}
    ></div>
  );
}
