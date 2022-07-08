import { useState } from 'react';

function SetTimeOutCard() {
    const [styles, changeStyle] = useState({
        backgroundColor: 'gray',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    });
    const [text, changeText] = useState('click the button');

    function changeColor(trueFalse) {
        if (trueFalse === true) {
            changeStyle({
                backgroundColor: 'lightblue',
                height: '160px',
                borderRadius: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            });
        } else if (trueFalse === false) {
            changeStyle({
                backgroundColor: 'gray',
                height: '120px',
                borderRadius: '0%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            });
        }
    }

    function twoSeconds() {
        changeColor(false);
        changeText('clicked');
        setTimeout(() => {
            changeText('changed in two seconds. wow');
            changeColor(true);
        }, 2000);
    }

    return (
        <>
            <div style={styles} className="card timeoutCard">
                <h1>{text}</h1>
                <div>
                    <button onClick={twoSeconds}>2 SECONDS</button>
                </div>
            </div>
        </>
    );
}

export default SetTimeOutCard;
