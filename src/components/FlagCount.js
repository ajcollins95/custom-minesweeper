import '../styles/BoardHeader.css';
import Game from './Game'
import React, { useState, useEffect } from 'react';



function FlagCount(props) {

  useEffect(() => {
    // Do something
    
  }, []);

  return (
    <div className="FlagCount">
      <p>Flags: {props.remainingFlags}</p>

    </div>
  );
}

export default FlagCount;
