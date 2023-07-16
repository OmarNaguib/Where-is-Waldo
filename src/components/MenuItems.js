import isCorrect from "../utils/isCorrect";
import data from "../utils/data";

export default function MenuItems({
  target,
  setTarget,
  characters,
  setCharacters,
  name,
  selectedSquare,
}) {
  const menuItems = characters
    .filter((item) => !item.found)
    .map((character, index) => (
      <button
        key={"menu" + index}
        className="menu-item"
        onClick={async (e) => {
          e.stopPropagation();
          setTarget(null);
          if (
            isCorrect(
              await data.getCorrectSquaresOf(name),
              selectedSquare,
              character[0]
            )
          ) {
            setCharacters((prev) => {
              return prev.map((item) => {
                if (character[0] === item[0]) return { ...item, found: true };
                else return item;
              });
            });
          }
        }}
      >
        <div className="name">{character[0]}</div>
        <img src={character[1]} alt={character[0]} />
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
