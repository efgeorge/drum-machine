import './../styles/Pad.scss'

const Pad = () => {
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

    // const handleKeyPress = (e) => {
    //     if (e.key === "Q") {
    //         new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3').play();
    //     }

    // }

    // const handleKeyPress = (e, key, source) => {
    //     if (e.key === key) {
    //         new Audio(source).play();
    //     }
    // }
    
    const padsOutput = pads.map(pad => 
        <button id="pad" onClick={() => new Audio(pad.source).play()} onKeyDown={() => new Audio(pad.source).play()}>
            {pad.key}
        </button>
    );
    

    return (
        <div id="drum-pad">
            {padsOutput}
        </div>
    )
}

export default Pad;