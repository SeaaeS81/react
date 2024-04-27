
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../redux/counterSlice';

function CounterStep() {
  const [step, setStep] = useState(1);
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input type="number" value={step} onChange={e => setStep(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(step))}>Increment by {step}</button>
    </div>
  );
}

export default CounterStep;