
import React, { useContext } from 'react';
import { CountContext } from '../App';

const Cont = () => {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
};

export default Cont;

// App.js
import React, { useState } from 'react';
import Cont from './components/Cont';

export const CountContext = React.createContext();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Cont />
    </CountContext.Provider>
  );
};

export default App;