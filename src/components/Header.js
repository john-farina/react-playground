import SvgLogo from './SvgLogo';

function Header() {
    return (
        <div id="header">
            <div id="header">
                <div id="logoContainer">
                    <div id="logoContainerLeft">
                        <h1 className="headerOne">REACT</h1>
                    </div>
                    <div id="logoContainerRight">
                        <SvgLogo />
                        <h1 className="headerTwo">playground</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
