import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [brand, setBrand] = useState('BeginEasy');
  const [transitionColor, setTransitionColor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBrand('BeginEasy');
      setIsLoading(true);
    }, 1500);
  }, []);

  setInterval(() => {
    setTransitionColor(transitionColor ? false : true);
  }, 10000);

  return (
    <div className={`container ${isLoading ? 'start' : ''} ${transitionColor ? 'transitionColor' : ''}`}>
      <h1 className={`title ${isLoading ? 'start' : ''} ${transitionColor ? 'transitionColor' : ''}`}>{brand}</h1>
    </div>
  );
}

export default App;

/*import '../styles/App.scss';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [brand, setBrand] = useState('BE');
  
  useEffect(() => {
    setTimeout(()=>{
      setBrand('BeginEasy');
      setIsLoading(true);
    }, 500);
  }, []);

  return (
    <div className="container">
      <h1 className={`title ${isLoading ? 'start' : ''}`}>{brand}</h1>
    </div>
  );
}

export default App;
*/
