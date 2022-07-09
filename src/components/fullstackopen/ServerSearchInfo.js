import { useState } from 'react';

function ServerSearchInfo({ searchInfo }) {
    const [infoScreen, setInfo] = useState(false);

    function handleClick() {
        if (infoScreen === false) {
            setInfo(true);
        } else if (infoScreen === true) {
            setInfo(false);
        } else {
            console.log('error');
        }
    }
    const noMargin = {
        margin: '0',
        fontSize: '30px',
    };
    return (
        <>
            {searchInfo.map((item) => {
                return (
                    <div
                        onClick={handleClick}
                        className="country"
                        key={item.name.common}
                    >
                        <div className="textContainer">
                            <h4 className="countryText" style={noMargin}>
                                {item.name.common}
                                {item.flag}
                            </h4>
                            <div className="countryText">
                                region: {item.region}
                            </div>
                            <div className="countryText">
                                the capital is: {item.capital}
                            </div>
                            <div className="countryText">
                                the population is: {item.population}
                            </div>
                        </div>
                        <img
                            className="countryFlag"
                            src={item.flags.png}
                            alt="flag"
                        />
                    </div>
                );
            })}
        </>
    );
}
export default ServerSearchInfo;
