import { useState } from 'react';

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
                <h2>Search a country (got this from a server)</h2>
                {search.map((item) => {
                    return <p key={item.name.common}>{item.name.common}</p>;
                })}
            </div>
        </>
    );
}

export default ServerCard;
