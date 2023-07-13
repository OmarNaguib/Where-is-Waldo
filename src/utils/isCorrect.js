const withinRange = (num, range) => num <= range;

const isCorrect = (correctSquares, chosenSquare, character = "waldo") => {
  const diff = chosenSquare.map((coords, index) =>
    Math.abs(coords - correctSquares[character][index])
  );
  console.log({ diff });
  return withinRange(diff[0], 1) && withinRange(diff[1], 2);
};

export default isCorrect;
