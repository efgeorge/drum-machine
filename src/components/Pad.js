import './../styles/Pad.scss';
import { useEffect, useRef } from 'react';

const Pad = ({ pads }) => {

    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [])

    const padsOutput = Object.entries(pads).map(([key, value]) => 
        <div id="pad" onClick={() => new Audio(value).play()} ref={ref} onFocus={e => console.log("focusat")}>
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