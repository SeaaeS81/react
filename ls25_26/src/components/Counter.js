
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { multiply, divide } from '../redux/actions';

function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
    </div>
  );
}

export default Counter;