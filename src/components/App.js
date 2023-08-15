import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
//import { Route, Routes } from 'react-router-dom';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  let [transitionColor, setTransitionColor] = useState(false);
  let [hidden, setHidden] = useState(true);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    handleTransitionColor();
  }, []);

  // functions
  const handleTransitionColor = () => {
    let i = 0;
    const intervalColor = setInterval(() => {
      i++
    setTransitionColor(transitionColor = !transitionColor);
    if (i === 2) {
      clearInterval(intervalColor);
      setTimeout(() => {
        setHidden(false);
      }, 1700);
    };
  }, 7000);
};

  // handle functions
  const handleClickBrand = (ev) => {
    console.log('hice click en la marca');
  };

  return (
    <div className={`container ${transitionColor ? 'transitionColor' : ''}`}>
      <nav className='container__nav'>
        <a href="/#/Welcome" onClick={handleClickBrand} className={`title ${isLoading ? 'start' : ''} ${transitionColor ? 'transitionColor' : ''}`}>
          <h1>BeginEasy</h1>
        </a>
      </nav>
      <section className='container__btn'>
        <button className={`darkMoodBtn ${hidden ? 'hidden' : ''}`}>Modo oscuro</button>
      </section>
    </div>
  );
}

export default App;
