import './App.scss';
import Pad from './components/Pad';
import Controls from './components/Controls';
import { useRef, useEffect, useState } from 'react';

function App() {
  const pads = {
    "Q": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "W": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "E": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "A": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "S": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "D": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "Z": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "X": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "C": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }

  const handleKeyPress = (e) => {
      const keyPress = new Audio(pads[e.key.toUpperCase()]);
      keyPress?.play();
  }

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [])

  return (
    <div id="app-wrapper" onKeyDown={handleKeyPress} tabIndex={0} ref={ref}>
      <div id="drum-machine">
        <Pad pads={pads}/>
        <Controls />
      </div>
    </div>
  );
}

export default App;
