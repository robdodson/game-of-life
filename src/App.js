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

  return (
    <div className="App">
      {isAlive ? (
        <LivingGrid seed={seed} delay={delay} />
      ) : (
        <SeedGrid seed={seed} setSeed={setSeed} setIsAlive={setIsAlive} />
      )}
    </div>
  );
}

export default App;
