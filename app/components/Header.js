import React from 'react';
import { h1, h2h3, a } from '../styles/Header';

export default (props) => {
  return (
    <div>
      <h1 style={h1}>The Haunted Mansion</h1>
      <h2 style={h2h3}>by <a href="http://www.ethanjfriedman.com" style={a}>Ethan Friedman</a></h2>
      <h3 style={h2h3}>A Speech-Recognition Adventure Like No Other!</h3>
    </div>
  );
};
