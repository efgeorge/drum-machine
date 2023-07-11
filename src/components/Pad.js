import './../styles/Pad.scss'

const Pad = () => {
    const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const padsOutput = pads.map(pad => <button id="pad">{pad}</button>);

    return (
        <div id="drum-pad">
            {padsOutput}
        </div>
    )
}

export default Pad;