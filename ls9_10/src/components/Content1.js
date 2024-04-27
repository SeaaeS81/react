
import React from 'react';

class Content1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: 'Initial data...' };
  }

  componentDidMount() {
    this.setState({ data: 'Data loaded.' });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated from', prevState, 'to', this.state);
  }

  componentWillUnmount() {
    console.log('Component will be unmounted');
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Content1;