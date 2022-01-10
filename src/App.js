import useLife from './lib/useLife';

// const seed = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

const grid = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, 0],
];

function App() {
  return (
    <div className="App">
      <div className="Grid">
        <table>
          <tbody>
            {grid.map((row, i) => (
              <tr key={'row-' + i}>
                {grid[i].map((col, j) => (
                  <td key={`row${i}col${j}`} data-alive={col === 1 ? '' : null}>
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
