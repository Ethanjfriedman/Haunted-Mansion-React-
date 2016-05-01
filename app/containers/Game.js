import React from 'react';
import { game, content, dropCap, choicesDisplay, choicesFirstWord } from '../styles/Game';
import { speechRecognition, checkForMatch, initRecognition, makeCommands } from '../utils/Gameplay';
import Story from '../assets/story/Story';
import Choices from '../components/Choices';
import Narrative from '../components/Narrative';

const Game = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    //create new speech recognition
    let recognition = new speechRecognition();

    // adding result event listener to the recognition
    recognition.onresult = (e) => {
      console.log('speech recognition event');
      // get the transcript of results to date, get the most recent one, and pop it
      let result = e.results[e.resultIndex][0].transcript.split(' ').pop();
      if (this.state.development) {
        this.setState({
          consoleSpeechResult: result
        });
      }
  //check to see if there's a match between the recognized speech and the available commands
      let match = checkForMatch(this.state.story.commands, result, this.state.story.scene.results);
  //if there is: move the story forward to the new scene
      if (match) {
        console.log('match found! New scene is: ', match);
        this.setState({
          story: {
            inProgress: true,
            scene: Story[match],
            commands: makeCommands(Story[match])
          }
        });
        //FIXME NEED TO ELIMINATE ABOVE SET STATE,
        this.context.router.push({
          pathname: '/game/' + match,
          inProgress: this.state.inProgress,
          development: this.state.development,
          consoleSpeechResult: this.state.consoleSpeechResult,
          story: this.state.story
        });
      }
    }
    console.log('get initial state');
    return {
      development: true,
      recognition: recognition,
      // consoleSpeechResult: this.props.consoleSpeechResult || "",
      consoleSpeechResult: "",
      story: {
        inProgress: true,
        scene: Story.opening,
        commands: makeCommands(Story.opening)
      }
    };
  },
  componentDidMount: function() {
    console.log('component did mount');


    // this.setState({
    //   story: {
    //     inProgress: this.state.story.inProgress,
    //     commands: makeCommands(this.state.story.scene),
    //     scene: this.state.story.scene
    //   }
    // });

    //initialize the recognition object and start it listening
    initRecognition(this);
  },
  componentWillUnmount: function() {
    console.log('stopping recognition');
    this.state.recognition.stop();
  },
  componentDidUpdate: function() {
    console.log('Game component updated.');
    console.log(this.state.story);
    console.log(this.props);
    if (this.state.consoleSpeechResult) {
      console.log(this.state.consoleSpeechResult);
    }
  },
  render: function() {

    return (
      <div style={game}>
          <Narrative narrative={this.state.story.scene.narrative} />
          <Choices choices={this.state.story.scene.fullChoices} />
      </div>
    );
  }
});

export default Game;
