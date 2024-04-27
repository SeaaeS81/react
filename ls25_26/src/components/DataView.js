
import React from 'react';
import { useSelector } from 'react-redux';

function DataView({ dataType }) {
  const data = useSelector(state => state[dataType]);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
}

export default DataView;