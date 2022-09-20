import '../styles/App.css';
import Game from './Game'
import React, { useState, useEffect } from 'react';



function App() {

  useEffect(() => {
    // Do something
    
  }, []);

  const handleClick = (e) => {
    console.log(`App sees you clicked...`)
    console.log(e.target)
  }

  return (
    <div className="App" onClick={handleClick}>
      <Game />
    </div>
  );
}

export default App;
