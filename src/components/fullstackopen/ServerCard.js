import { useState } from 'react';

function ServerCard({ list }) {
    // console.log(list);
    const styles = {
        overflowY: 'scroll',
    };
    const result = list.filter((word) => word.name.common.includes('y'));
    // console.log(result);
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
            <div style={styles} className="card">
                <input
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="search"
                />
                <h2>i got this from a server wow</h2>
                {search.map((item) => {
                    return <p key={item.name.common}>{item.name.common}</p>;
                })}
            </div>
        </>
    );
}

export default ServerCard;
