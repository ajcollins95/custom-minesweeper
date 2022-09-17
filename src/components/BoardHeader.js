import '../styles/BoardHeader.css';
import FlagCount from './FlagCount'
import React, { useState, useEffect } from 'react';



function BoardHeader(props) {

  useEffect(() => {
    // Do something
    
  }, []);

  //const [difficulty, setDifficulty ] = React.useState('easy');

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
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
    <div className="BoardHeader">
       <div className="app-row">
        <Dropdown
          label="Difficulty"
          options={options}
          value={props.difficulty}
          onChange={handleDiffChange}
        />
        <FlagCount
          remainingFlags={props.difficulties[props.difficulty].mines - props.placedFlags}
          placedFlags={props.placedFlags} />

       </div>
    </div>
  );
}

export default BoardHeader;
