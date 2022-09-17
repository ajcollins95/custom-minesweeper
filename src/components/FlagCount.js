import '../styles/BoardHeader.css';
import Game from './Game'
import React, { useState, useEffect } from 'react';



function FlagCount(props) {

  useEffect(() => {
    // Do something
    
  }, []);

  //const [difficulty, setDifficulty ] = React.useState('easy');

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

  const options = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  const handleDiffChange = (event) => {
    console.log('diffchange bheader')
    props.handleDiffChange(event.target.value)

  };

  return (
    <div className="FlagCount">
      <p>Flags: {props.placedFlags}</p>

    </div>
  );
}

export default FlagCount;
