import '../styles/BoardHeader.css';
import Game from './Game'
import React, { useState, useEffect } from 'react';



function BoardHeader() {

  useEffect(() => {
    // Do something
    
  }, []);

  const [difficulty, setDifficulty ] = React.useState('fruit');

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
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="BoardHeader">
      <p>New Header</p>
       <div className="app-row">
        {/**
         <DifficultySelector />
         <FlagCounter />
         <Timer />
         */}
        <Dropdown
          label="Difficulty"
          options={options}
          value={difficulty}
          onChange={handleChange}
        />

    
       </div>
    </div>
  );
}

export default BoardHeader;
