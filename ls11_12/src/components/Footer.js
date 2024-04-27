
import React, { useState, useEffect } from 'react';

function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count updated');
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Footer;