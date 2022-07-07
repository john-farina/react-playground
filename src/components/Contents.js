import HelloWorldCard from './HelloWorldCard';
import ColorButtonsCard from './ColorButtonsCard';
import DarkLightModeCard from './DarkLightModeCard';
import { useState } from 'react';

function Contents({ themeStyle }) {
    const [thisThemeStyle, changeTheme] = useState({
        backgroundColor: themeStyle.backgroundColor,
    });

    return (
        <div style={thisThemeStyle} id="playgroundContent">
            <HelloWorldCard />
            <ColorButtonsCard />
            <DarkLightModeCard />
        </div>
    );
}
export default Contents;
