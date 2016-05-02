import React from 'react';
import { Link } from 'react-router';
import Button from './Button';
import { startDiv, button } from '../styles/Start';
require('../styles/css/Animations.css');

export default (props) => {
  return (
    <div style={startDiv}>
      <Button destination="/about" buttonText="How to Play" />
      <Button destination="/game/opening" buttonText="Start Game"/>
    </div>
  );
};
