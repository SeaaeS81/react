
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';

function ShowButton({ dataType }) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(fetchData(dataType))}>
      Show {dataType}
    </button>
  );
}

export default ShowButton;