export default function Square({ x, y }) {
  return (
    <div
      className="square"
      onClick={() => {
        console.log({ x, y });
      }}
    ></div>
  );
}
