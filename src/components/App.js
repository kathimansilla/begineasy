import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [transitionColor, setTransitionColor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  setInterval(() => {
    setTransitionColor(transitionColor ? false : true);
  }, 7000);

  return (
    <div className={`container ${transitionColor ? 'transitionColor' : ''}`}>
      <h1 className={`title ${isLoading ? 'start' : ''} ${transitionColor ? 'transitionColor' : ''}`}>BeginEasy</h1>
    </div>
  );
}

export default App;
