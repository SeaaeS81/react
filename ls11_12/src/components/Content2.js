
import React, { useState, useEffect } from 'react';

function Content2() {
  const [data, setData] = useState('Initial data...');

  useEffect(() => {
    setData('Data loaded.');

    return () => {
      console.log('Component will be unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Component updated');
  }, [data]);

  return <div>{data}</div>;
}

export default Content2;