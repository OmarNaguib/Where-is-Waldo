import { getCorrectSquaresOf, addLeaderboardRecord } from "./backend";

const allCharacters = {
  waldo: ["waldo", require("../assets/characters/waldo.webp")],
  odlaw: ["odlaw", require("../assets/characters/Odlaw.jpg")],
  wizard: ["wizard", require("../assets/characters/Wizard-Whitebeard.jpg")],
};
const mapCharacters = { beach: ["waldo", "odlaw", "wizard"] };

const getCharcterDataOf = (map) =>
  mapCharacters[map].map((item) => allCharacters[item]);

const data = { getCorrectSquaresOf, addLeaderboardRecord, getCharcterDataOf };
export default data;
