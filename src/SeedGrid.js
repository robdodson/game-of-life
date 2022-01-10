export default function SeedGrid({ seed, setSeed, setIsAlive }) {
  function handleToggle(e) {
    const { target } = e;
    const row = Number(target.getAttribute('data-row'));
    const col = Number(target.getAttribute('data-col'));
    let newSeed = JSON.parse(JSON.stringify(seed));
    newSeed[row][col] = newSeed[row][col] === 0 ? 1 : 0;
    setSeed(newSeed);
  }

  function handleStart() {
    setIsAlive(true);
  }

  return (
    <div className="SeedGrid">
      <table onClick={handleToggle}>
        <tbody>
          {seed.map((row, i) => (
            <tr key={'row-' + i}>
              {row.map((col, j) => (
                <td
                  key={`row${i}col${j}`}
                  data-row={i}
                  data-col={j}
                  data-alive={col === 1 ? '' : null}
                >
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}
