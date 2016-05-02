import React from 'react';
import { Link } from 'react-router';
import { button } from '../styles/Start';
require('../styles/css/Animations.css');

export default (props) => {
  return (
    <Link to={props.destination}>
      <button style={button} className="animateIn">{props.buttonText}</button>
    </Link>
  );
};
