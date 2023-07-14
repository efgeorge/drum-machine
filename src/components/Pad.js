import './../styles/Pad.scss';
import { useEffect, useRef } from 'react';

const Pad = ({ pads }) => {
    

    // const handleKeyPress = (e) => {
    //     if (e.key === "Q") {
    //         new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3').play();
    //     }

    // }
    
    // const handleKeyPress = (e, key,) => {
    //     console.log(e.key);
    // }

    // const ref = useRef(null);
    // useEffect(() => {
    //     ref.current.focus();
    // }, []);

    const padsOutput = pads.map(pad => 
        // ref={ref} onKeyDown={(e) => handleKeyPress(e, pad.key, pad.source)} tabIndex={0}
        <div id="pad" onClick={() => new Audio(pad.source).play()} >
            {pad.key}
        </div>
    );
    

    return (
        <div id="drum-pad">
            {padsOutput}
        </div>
    )
}

export default Pad;