import './../styles/Pad.scss';
import { useEffect, useRef } from 'react';

const Pad = ({ pads }) => {
    const padsOutput = Object.entries(pads).map(([key, value]) => 
        <div id="pad" onClick={() => new Audio(value).play()} >
            {key}
        </div>
    );

    return (
        <div id="drum-pad">
            {padsOutput}
        </div>
    )
}

export default Pad;