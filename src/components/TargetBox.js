export default function TargetBox({ target }) {
  return (
    <div
      className="target-box"
      style={{
        top: `calc(${target[1]}px - 5%)`,
        left: `calc(${target[0]}px - 3%)`,
      }}
    ></div>
  );
}
