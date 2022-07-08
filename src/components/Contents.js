import HelloWorldCard from './HelloWorldCard';
import ColorButtonsCard from './ColorButtonsCard';
import FormCard from './FormCard';
import MovementCard from './MovementCard';
import SetTimeOutCard from './SetTimeOutCard';
import { useState } from 'react';
// import DarkLightModeCard from './DarkLightModeCard';
function Contents({ themeStyle }) {
    const [thisThemeStyle] = useState({
        backgroundColor: themeStyle.backgroundColor,
    });

    return (
        <div style={thisThemeStyle} id="playgroundContent">
            <HelloWorldCard />
            <ColorButtonsCard />
            <FormCard />
            <MovementCard />
            <SetTimeOutCard />
        </div>
    );
}
export default Contents;
