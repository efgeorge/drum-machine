import './App.scss';
import Pad from './components/Pad';
import Controls from './components/Controls';

function App() {
  const pads = [
    {'key': 'Q',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'        
    }, 
    {'key': 'W',
    'source': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'        
    }, 
    {'key': 'E',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'        
    }, 
    {'key': 'A',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'        
    }, 
    {'key': 'S',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'        
    }, 
    {'key': 'D',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'        
    }, 
    {'key': 'Z',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'        
    }, 
    {'key': 'X',
     'source': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'        
    }, 
    {'key': 'C',
    'source': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'        
    }
  ];

  const handleKeyPress = (e, key, source) => {
    if (e.key === key) {
        new Audio(source).play();
    }
}

  return (
    <div id="drum-machine">
      <Pad pads={pads}/>
      <Controls />
    </div>
  );
}

export default App;
