import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import React from 'react';

const App = () => {
  const obj = { member1: 'num1', member2: 'member 2' };

  return (
    <div>
      {obj.member1}
      {obj.member2}
    </div>
  );
};

export default App;

import React from 'react';

const PersonProp = (props) => <div>{props.character}</div>;

const PersonChild = ({ children }) => <div>{children}</div>;

export { PersonProp, PersonChild };


import React from 'react';
import { PersonProp, PersonChild } from './Person';

const App = () => (
  <div>
    <PersonProp character="333" />
    <PersonChild>222</PersonChild>
  </div>
);

export default App;


console.log(<PersonProp character="777" />);
console.log(<PersonChild>888</PersonChild>);

