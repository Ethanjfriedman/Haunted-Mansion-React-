import React from 'react';
import { body } from '../styles/App';
import { backgroundImage } from "../styles/Background";
import Header from '../components/Header';

const App = React.createClass({
  render: function() {
    return (
      <div style={body}>
        <Header />
        <div style={backgroundImage}></div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default App;
