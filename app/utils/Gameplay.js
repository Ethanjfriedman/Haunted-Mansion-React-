//prefixes for cross-browser compatability
export const speechRecognition = window.webkitSpeechRecognition ||
                                 window.mozSpeechRecognition    ||
                                 window.msSpeechRecognition     ||
                                 window.oSpeechRecognition      ||
                                 window.SpeechRecognition;

// initializes and starts the speech recognition
export const initRecognition = (obj) => {
  console.log('Initializing recognition');
  //set up the speech recognition
  //listen continuously
  obj.state.recognition.continuous = true;
  //if recognition stops (due to a timeout event), restart it
  obj.state.recognition.onend = function() {
    if (obj.state.story.inProgress) {
      console.log('restarting recognition');
      obj.state.recognition.start();
    }
  }
  console.log('starting to listen');
  //start the recognition
  obj.state.recognition.start();
};

//checks for a match between the word recognized and the available commands
//if one is found returns the corresponding "action" (result)
export const checkForMatch = (commands, word, results) => {
  console.log("checking for match");
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == word) {
      return results[i];
    }
  }
  return false;
};

// grabs the first word of each choice, to generate the one-word commands
// (for the recognition to listen for)
export const makeCommands = (scene) => {
  return scene.fullChoices.map((choice) => {
    return choice.toLowerCase().split(' ')[0];
  });
};
