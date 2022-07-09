import { useState } from 'react';
import ServerSearchInfo from './ServerSearchInfo';

function ServerCard({ list }) {
    const styles = {
        overflowY: 'scroll',
    };

    const [search, setSearch] = useState([]);
    const searchStyle = {
        marginBottom: '-20px',
    };
    const [weatherList, setWeather] = useState([]);

    function handleSearchChange(event) {
        console.log(event.target.value);
        const results = list.filter((names) =>
            names.name.common.includes(event.target.value)
        );
        setSearch(results);
        console.log(results);
    }

    return (
        <>
            <input
                onChange={handleSearchChange}
                type="text"
                placeholder="search"
                style={searchStyle}
            />
            <div style={styles} className="card countryCard">
                <h2>
                    Search a country{' '}
                    <span className="smallText">(got this from a server)</span>
                </h2>
                <ServerSearchInfo searchInfo={search} />
            </div>
        </>
    );
}

export default ServerCard;
