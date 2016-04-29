import React from 'react';
import { Link } from 'react-router';
import { button } from '../styles/Start';
require('../styles/css/Animations.css');

export default (props) => {
  return (
    <Link to="/game/opening">
      <button style={button} className="animateIn">Start game</button>
    </Link>
  );
};
