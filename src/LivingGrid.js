import useLife from './lib/useLife';

export default function LivingGrid({ seed, delay }) {
  const grid = useLife(seed, delay);

  return (
    <div className="LivingGrid">
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={'row-' + i}>
              {row.map((col, j) => (
                <td key={`row${i}col${j}`} data-alive={col === 1 ? '' : null}>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled>Start</button>
      </div>
    </div>
  );
}
