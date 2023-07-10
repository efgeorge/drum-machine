import './../styles/Pad.scss'

const Pad = () => {
    const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const padsOutput = pads.map(pad => <div id="pad">{pad}</div>);

    return (
        <div id="drum-pad">
            {padsOutput}
        </div>
    )
}

export default Pad;