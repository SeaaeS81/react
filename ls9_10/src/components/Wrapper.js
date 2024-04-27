import React from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNavbar: true, showContent1: true };
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ showNavbar: !prevState.showNavbar }));
  };

  toggleContent1 = () => {
    this.setState(prevState => ({ showContent1: !prevState.showContent1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleNavbar}>Toggle Navbar</button>
        {this.state.showNavbar && <Navbar />}
        <button onClick={this.toggleContent1}>Toggle Content1</button>
        {this.state.showContent1 && <Content1 />}
      </div>
    );
  }
}

export default Wrapper;

import React from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNavbar: true, showContent1: true };
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ showNavbar: !prevState.showNavbar }));
  };

  toggleContent1 = () => {
    this.setState(prevState => ({ showContent1: !prevState.showContent1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleNavbar}>Toggle Navbar</button>
        {this.state.showNavbar && <Navbar />}
        <button onClick={this.toggleContent1}>Toggle Content1</button>
        {this.state.showContent1 && <Content1 />}
      </div>
    );
  }
}

export default Wrapper;