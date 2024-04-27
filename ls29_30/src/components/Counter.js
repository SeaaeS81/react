
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { multiply, divide } from '../redux/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
    </div>
  );
}

export default Counter;