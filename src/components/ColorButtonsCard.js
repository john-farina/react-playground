import { useState } from 'react';

function ColorButtonsCard() {
    const [styles, changeStyle] = useState({
        backgroundColor: 'gray',
    });

    const buttonStyle = {
        borderStyle: 'solid',
        backgroundColor: styles.backgroundColor,
        borderRadius: '5px',
        borderColor: 'black',
        color: 'black',
        height: '40px',
    };

    function redBackground() {
        changeStyle({ backgroundColor: 'lightcoral' });
    }
    function greenBackground() {
        changeStyle({ backgroundColor: 'lightgreen' });
    }
    function blueBackground() {
        changeStyle({ backgroundColor: 'lightblue' });
    }

    return (
        <div style={styles} className="card" id="colorButtonCard">
            <button style={buttonStyle} onClick={redBackground}>
                RED
            </button>
            <button style={buttonStyle} onClick={greenBackground}>
                GREEN
            </button>
            <button style={buttonStyle} onClick={blueBackground}>
                BLUE
            </button>
        </div>
    );
}

export default ColorButtonsCard;
