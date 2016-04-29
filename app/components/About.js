import React from 'react';
import StartButton from './StartButton';
import { about, span, a, aboutDiv } from '../styles/About';
require('../styles/css/Animations.css');

const About = (props) => {
  return (
    <div style={aboutDiv}>
      <p style={about} className="animateIn">
        <span style={span}>The Haunted Mansion</span> is a traditional choose-your-own-adventure text-adventure game with a twist! Instead of typing or clicking on your desired actions, you can simply speak them and the computer will react accordingly. Built by Ethan Friedman using React and the built-in Speech Recognition API.
      </p>
      <p style={about} className="animateIn">
        To play the game, click the start button. You will be presented with a scene from the story and a list of actions you can choose from. Just speak the first word of your desired action, and voila! the story will move forward as instructed.
      </p>
      <p style={about} className="animateIn">Good luck surviving the night in <span style={span}>The Haunted Mansion</span>! If you like the game, please let me know what you think! I can be reached at <a href="mailto:ethanjfriedman@gmail.com" style={a}>ethanjfriedman@gmail.com</a>. The Github repo for the game is available <a href="#" style={a}>here.</a></p>
      <StartButton />
    </div>
  );
};

export default About;
