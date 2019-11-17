function isCellAlive(cell, allLivingCells) {
  const neighbouringCells = allLivingCells.filter((gridCell) => {
    return (
      gridCell.col >= cell.col - 1 &&
      gridCell.col <= cell.col + 1 &&
      gridCell.row >= cell.row - 1 &&
      gridCell.row <= cell.row + 1
    );
  });

  if (neighbouringCells.length > 4) return false;
  if (neighbouringCells.length > 2) return true;
  return false;
}

describe('Game of life', () => {
  it('should die if it only has 1 neighbour', () => {
    expect(
      isCellAlive({ row: 2, col: 2 }, [
        { row: 1, col: 1 },
        { row: 2, col: 2 }
      ])
    ).toBe(false);
  });

  it('should live if has 3 neighbours', () => {
    expect(
      isCellAlive({ row: 2, col: 2 }, [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 2, col: 2 },
        { row: 3, col: 3 }
      ])
    ).toBe(true);
  });

  it('should die if it has 4 neighbours', () => {
    expect(
      isCellAlive({ row: 2, col: 2 }, [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 2, col: 2 },
        { row: 3, col: 3 },
        { row: 3, col: 1 }
      ])
    ).toBe(false);
  });

  it('should die if has 0 neighbours', () => {
    expect(
      isCellAlive({ row: 3, col: 1 }, [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 3, col: 1 },
        { row: 3, col: 3 }
      ])
    ).toBe(false);
  });

  it('should die on the edge with 1 neighbour', () => {
    expect(isCellAlive({ row: 0, col: 0 }, [{ row: 1, col: 1 }])).toBe(false);
  });

  it('should become alive if there are 3 neighbours surrounding the cell', () => {
    expect(
      isCellAlive({ row: 2, col: 2 }, [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 3, col: 3 }
      ])
    ).toBe(true);
  });
});
