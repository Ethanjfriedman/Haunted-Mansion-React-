import React from 'react';
require('../styles/css/Animations.css');
import { dropCap } from '../styles/Game';

export default (props) => {
  let paras = props.narrative.map((p) => {
    return <p key={p.split(' ').join('').slice(0,10)} className="animateIn">
             <span style={dropCap}>{p.slice(0,1)}</span>
             {p.slice(1)}
           </p>
  });
  
  return (
    <div>{paras}</div>
  );
};
