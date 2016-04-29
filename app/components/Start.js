import React from 'react';
import { Link } from 'react-router';
import StartButton from './StartButton';
import { startDiv, button } from '../styles/Start';
require('../styles/css/Animations.css');

export default (props) => {
  return (
    <div style={startDiv}>
      <Link to="/about">
        <button style={button} className="animateIn">How to Play</button>
      </Link>
      <StartButton />
    </div>
  );
};
