const corretSquares = {
  beach: { odlaw: [2, 21], waldo: [48, 22], wizard: [16, 20] },
};

const getCorrectSquaresOf = (map) => corretSquares[map];

const path = "../assets/characters/";
const allCharacters = {
  waldo: ["waldo", require("../assets/characters/waldo.webp")],
  odlaw: ["odlaw", require("../assets/characters/Odlaw.jpg")],
  wizard: ["wizard", require("../assets/characters/Wizard-Whitebeard.jpg")],
};
const mapCharacters = { beach: ["waldo", "odlaw", "wizard"] };

const getCharcterDataOf = (map) =>
  mapCharacters[map].map((item) => allCharacters[item]);

const data = { getCorrectSquaresOf, getCharcterDataOf };
export default data;
