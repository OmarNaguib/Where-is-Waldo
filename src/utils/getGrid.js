export default function getGrid(x, y) {
  let grid = [];
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      grid.push([j, i]);
    }
  }
  return grid;
}
