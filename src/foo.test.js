function cellIsAlive(cell, aliveCells) {
  if (aliveCells.length === 4 || aliveCells.length === 3) return true;
  return false;
}

it("should die if it's alone", () => {
  expect(cellIsAlive([0, 0], [[0, 0]])).toBe(false);
});

it('should remain unchanged', () => {
  expect(
    cellIsAlive(
      [1, 1],
      [
        [0, 0],
        [1, 1],
        [0, 2],
        [2, 2]
      ]
    )
  ).toBe(true);
});

it('should die if overcrowded', () => {
  expect(
    cellIsAlive(
      [1, 1],
      [
        [0, 0],
        [2, 0],
        [0, 2],
        [2, 2],
        [1, 1]
      ]
    )
  ).toBe(false);
});

it('if 3 neighbors should become alive', () => {
  expect(
    cellIsAlive(
      [1, 1],
      [
        [0, 2],
        [2, 2],
        [0, 0]
      ]
    )
  ).toBe(true);
});

it('should die if neighbours are distant', () => {
  expect(
    cellIsAlive(
      [2, 2],
      [
        [1, 1],
        [0, 4],
        [2, 2],
        [4, 0]
      ]
    )
  ).toBe(false);
});
