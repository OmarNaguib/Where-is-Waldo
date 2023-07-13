import isCorrect from "../utils/isCorrect";
import data from "../utils/data";

export default function MenuItems({
  target,
  characters,
  name,
  selectedSquare,
}) {
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
    <div
      className="drop-menu"
      style={{
        top: `calc(${target[1]}px + 6%)`,
        left: `calc(${target[0]}px - 4%)`,
      }}
    >
      {menuItems}
    </div>
  );
}
