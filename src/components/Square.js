export default function Square({ x, y, setSelectedSquare }) {
  return (
    <div
      className="square"
      onClick={() => {
        setSelectedSquare([x, y]);
      }}
    ></div>
  );
}
