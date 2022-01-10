import { useState } from 'react';

// - Any live cell with two or three live neighbours survives.
// - Any dead cell with three live neighbours becomes a live cell.
// - All other live cells die in the next generation. Similarly, all other dead cells stay dead.

// The initial pattern constitutes the seed of the system. The first generation
// is created by applying the above rules simultaneously to every cell in the
// seed, live or dead; births and deaths occur simultaneously, and the discrete
// moment at which this happens is sometimes called a tick.[nb 1] Each
// generation is a pure function of the preceding one. The rules continue to be
// applied repeatedly to create further generations.

function addNeighbors(grid, row, col) {
  debugger;
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let sum = 0;
  sum = sum + (grid?.[row - 1]?.[col - 1] || 0); // Top left
  sum = sum + (grid?.[row - 1]?.[col] || 0); // Top
  sum = sum + (grid?.[row - 1]?.[col + 1] || 0); // Top right
  sum = sum + (grid?.[row]?.[col - 1] || 0); // Left
  sum = sum + (grid?.[row]?.[col + 1] || 0); // Right
  sum = sum + (grid?.[row + 1]?.[col - 1] || 0); // Bottom left
  sum = sum + (grid?.[row + 1]?.[col] || 0); // Bottom
  sum = sum + (grid?.[row + 1]?.[col + 1] || 0); // Bottom right
  return sum;
}

function tick(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let newGrid = [[]];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      const sum = addNeighbors(grid, row, col);

      if (cell === 0) {
        if (sum === 3) {
          // Dead cell is reborn!
          newGrid[row][col] = 1;
          continue;
        }
      }

      if (sum > 1 && sum < 4) {
        // Lives
        newGrid[row][col] = 1;
        continue;
      }

      if (sum < 2 || sum > 3) {
        // Dies
        newGrid[row][col] = 0;
        continue;
      }
    }
  }
  return newGrid;
}

export default function useLife(seed) {
  const [grid, setGrid] = useState(seed);

  setInterval(() => {
    setGrid((grid) => tick(grid));
  }, 1000);

  return grid;
}
