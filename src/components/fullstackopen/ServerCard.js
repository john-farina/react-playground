import { useState } from 'react';
import ServerSearchInfo from './ServerSearchInfo';

function ServerCard({ list }) {
    const styles = {
        overflowY: 'scroll',
    };

    const [search, setSearch] = useState([]);

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
            <div style={styles} className="card countryCard">
                <input
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="search"
                />
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
