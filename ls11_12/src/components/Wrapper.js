
import React, { useState } from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';
import Content2 from './Content2';
import Footer from './Footer';

function Wrapper() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div>
      <button onClick={() => setShowNavbar(!showNavbar)}>Toggle Navbar</button>
      {showNavbar && <Navbar />}
      <button onClick={() => setShowContent1(!showContent1)}>Toggle Content1</button>
      {showContent1 && <Content1 />}
      <button onClick={() => setShowContent2(!showContent2)}>Toggle Content2</button>
      {showContent2 && <Content2 />}
      <button onClick={() => setShowFooter(!showFooter)}>Toggle Footer</button>
      {showFooter && <Footer />}
    </div>
  );
}

export default Wrapper;