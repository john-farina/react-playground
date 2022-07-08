import HelloWorldCard from './HelloWorldCard';
import ColorButtonsCard from './ColorButtonsCard';
import FormCard from './FormCard';
import MovementCard from './MovementCard';
import SetTimeOutCard from './SetTimeOutCard';
import { useState } from 'react';

import FsPhoneBook from './fullstackopen/FsPhoneBook';
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
            <FsPhoneBook />
        </div>
    );
}
export default Contents;
