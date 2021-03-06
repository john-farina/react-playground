import { useState } from 'react';

function MovementCard() {
    const contStyle = {
        display: 'flex',
        gap: '3px',
    };
    const [movementCount, changeMovement] = useState(0);
    const [movementBarStyle] = useState({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        height: '100%',
        backgroundColor: 'red',
    });
    const [characterStyleLeft, changeStyleLeft] = useState({
        display: 'none',
    });
    const [characterStyleMiddle, changeStyleMiddle] = useState({
        display: 'none',
    });
    const [characterStyleRight, changeStyleRight] = useState({
        display: 'none',
    });

    function detectMovement() {
        if (movementCount === 0) {
            changeStyleLeft({ display: 'flex' });
            changeStyleMiddle({ display: 'none' });
            changeStyleRight({ display: 'none' });
        } else if (movementCount === 1) {
            changeStyleLeft({ display: 'none' });
            changeStyleMiddle({ display: 'flex' });
            changeStyleRight({ display: 'none' });
        } else if (movementCount === 2) {
            changeStyleLeft({ display: 'none' });
            changeStyleMiddle({ display: 'none' });
            changeStyleRight({ display: 'flex' });
        } else {
            console.log('error');
        }
    }

    function lowerMovementCount() {
        if (movementCount === 0) {
            changeMovement(2);
            console.log(movementCount);
            detectMovement();
        } else {
            changeMovement(movementCount - 1);
            console.log(movementCount);
            detectMovement();
        }
    }
    function raiseMovementCount() {
        if (movementCount === 2) {
            changeMovement(0);
            console.log(movementCount);
            detectMovement();
        } else {
            changeMovement(movementCount + 1);
            console.log(movementCount);
            detectMovement();
        }
    }

    return (
        <>
            <div style={contStyle} className="card" id="movementCard">
                <div style={movementBarStyle} id="leftMovement">
                    <div style={characterStyleLeft} className="character"></div>
                </div>
                <div style={movementBarStyle} id="middleMovement">
                    <div
                        style={characterStyleMiddle}
                        className="character"
                    ></div>
                </div>
                <div style={movementBarStyle} id="rightMovement">
                    <div
                        style={characterStyleRight}
                        className="character"
                    ></div>
                </div>
            </div>
            <div style={contStyle}>
                <button onClick={lowerMovementCount}>LEFT</button>
                <button onClick={raiseMovementCount}>RIGHT</button>
            </div>
        </>
    );
}

export default MovementCard;
