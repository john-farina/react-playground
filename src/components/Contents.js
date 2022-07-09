import HelloWorldCard from './HelloWorldCard';
import ColorButtonsCard from './ColorButtonsCard';
import FormCard from './FormCard';
import MovementCard from './MovementCard';
import SetTimeOutCard from './SetTimeOutCard';
import ServerCard from './fullstackopen/ServerCard';
import EmptyCard from './EmptyCard';
import { useState } from 'react';

import FsPhoneBook from './fullstackopen/FsPhoneBook';
// import DarkLightModeCard from './DarkLightModeCard';
function Contents({ themeStyle, list }) {
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
            <ServerCard list={list} />
            <EmptyCard />
        </div>
    );
}
export default Contents;
