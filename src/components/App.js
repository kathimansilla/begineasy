import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [transitionColor, setTransitionColor] = useState(false);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  // functions
  setInterval(() => {
    setTransitionColor(transitionColor ? false : true);
  }, 7000);

  // handle functions
  const handleClickBrand = (ev) => {
    console.log('hice click en la marca');
  };

  return (
    <div className={`container ${transitionColor ? 'transitionColor' : ''}`}>
      <h1 onClick={handleClickBrand} className={`title ${isLoading ? 'start' : ''} ${transitionColor ? 'transitionColor' : ''}`}>BeginEasy</h1>
    </div>
  );
}

export default App;
