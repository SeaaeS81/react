
import React, { useState, useEffect } from 'react';

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = `React App`;
    };
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

export default ExampleComponent;