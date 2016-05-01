import React from 'react';
import { choicesFirstWord } from '../styles/Game';
require('../styles/css/Animations.css');

export default (props) => {
  let choices = props.choices.map((c) => {
    return <p key={c.split(' ')[0]} className="animateIn">
      <span style={choicesFirstWord}>{c.split(' ')[0]}</span>
      {" " + c.split(' ').slice(1).join(' ')}
    </p>
  });

  return (
    <div>{choices}</div>
  );
};
