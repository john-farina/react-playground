import { useState } from 'react';

function HelloWorldCard() {
    const [clicks, setClicks] = useState(0);

    const addClicks = () => {
        setClicks(clicks + 1);
    };

    const styles = {
        marginLeft: '10px',
    };

    return (
        <div className="card" id="helloWorldCard">
            <div style={styles} id="textContainer">
                <h1>hello world</h1>
                <p>Youve clicked me {clicks} times</p>
            </div>
            <div style={styles} id="buttonContainer">
                <button onClick={addClicks}>click me</button>
            </div>
        </div>
    );
}

export default HelloWorldCard;
