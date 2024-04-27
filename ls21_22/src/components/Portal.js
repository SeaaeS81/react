
import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
  return ReactDOM.createPortal(
    'мій перший портал',
    document.body
  );
};

export default Portal;