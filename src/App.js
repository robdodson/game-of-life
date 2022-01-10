import range from './lib/range';
import { useState } from 'react';
import SeedGrid from './SeedGrid';
import LivingGrid from './LivingGrid';

function createSeed(rows, cols) {
  let seed = [];
  for (let i = 0; i < rows; i++) {
    seed.push(range(cols));
  }
  return seed;
}

function App({ rows, cols, delay }) {
  const [isAlive, setIsAlive] = useState(false);
  const [seed, setSeed] = useState(() => createSeed(rows, cols));

  function handleStart() {
    setIsAlive(true);
  }

  function handleRestart() {
    setSeed(createSeed(rows, cols));
    setIsAlive(false);
  }

  return (
    <div className="App">
      <div className="controls">
        <button onClick={handleStart} disabled={isAlive}>
          Start
        </button>
        <button onClick={handleRestart} disabled={!isAlive}>
          Restart
        </button>
      </div>

      <div className="board">
        {isAlive ? (
          <LivingGrid seed={seed} delay={delay} />
        ) : (
          <SeedGrid seed={seed} setSeed={setSeed} />
        )}
      </div>
    </div>
  );
}

export default App;
