
import React, { useState } from 'react';

function Rand() {
  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    setNumber(Math.random());
  };

  return (
    <div>
      <h1>Random Number: {number}</h1>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}

export default Rand;