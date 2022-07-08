import { useState } from 'react';

function SetTimeOutCard() {
    const [styles, changeStyle] = useState({
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    });
    const [text, changeText] = useState('click the button');

    function changeColor() {
        changeStyle({
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
        });
    }

    function twoSeconds() {
        changeText('clicked');
        setTimeout(() => {
            changeText('changed in two seconds. wow');
            changeColor();
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
