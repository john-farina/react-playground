import { useState } from 'react';
import SvgLogo from './SvgLogo';

function Header({ themeStyle }) {
    const [thisThemeStyle, changeTheme] = useState({
        backgroundColor: themeStyle.backgroundColor,
    });

    return (
        <div style={thisThemeStyle} id="header">
            <div style={thisThemeStyle} id="header">
                <div style={thisThemeStyle} id="logoContainer">
                    <div style={thisThemeStyle} id="logoContainerLeft">
                        <h1 className="headerOne">REACT</h1>
                    </div>
                    <div style={thisThemeStyle} id="logoContainerRight">
                        <SvgLogo />
                        <h1 className="headerTwo">playground</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
