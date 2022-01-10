import { useRef } from 'react';

const TD = 'TD';

export default function SeedGrid({ seed, setSeed }) {
  const isMouseDown = useRef(false);
  const toggleValue = useRef(1);

  function toggle(target) {
    if (isMouseDown.current === false) {
      return;
    }

    if (target.tagName !== TD) {
      return;
    }

    const row = Number(target.getAttribute('data-row'));
    const col = Number(target.getAttribute('data-col'));
    let newSeed = JSON.parse(JSON.stringify(seed));
    newSeed[row][col] = toggleValue.current;
    setSeed(newSeed);
  }

  function handleMouseDown(e) {
    const { target } = e;
    isMouseDown.current = true;
    if (target.tagName === TD) {
      toggleValue.current = target.hasAttribute('data-alive') ? 0 : 1;
      toggle(e.target);
    }
  }

  function handleMouseUp() {
    isMouseDown.current = false;
  }

  function handleMouseOver(e) {
    toggle(e.target);
  }

  return (
    <div className="SeedGrid">
      <table
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOver={handleMouseOver}
      >
        <tbody>
          {seed.map((row, i) => (
            <tr key={'row-' + i}>
              {row.map((col, j) => (
                <td
                  key={`row${i}col${j}`}
                  data-row={i}
                  data-col={j}
                  data-alive={col === 1 ? '' : null}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
