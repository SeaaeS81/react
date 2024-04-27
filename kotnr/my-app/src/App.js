//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
     // <header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
       // <p>
        //  Edit <code>src/App.js</code> and save to reload.
       // </p>
      //  <a
        //  className="App-link"
       //   href="https://reactjs.org"
       //   target="_blank"
       //   rel="noopener noreferrer"
        //>
        //  Learn React
      //  </a>
     // </header>
   // </div>
 // );
//}

//export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CreateArticlePage from './pages/CreateArticlePage';
import EditArticlePage from './pages/EditArticlePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/create" component={CreateArticlePage} />
          <Route path="/edit/:id" component={EditArticlePage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
