function ServerCard({ list }) {
    console.log(list);
    const styles = {
        overflowY: 'scroll',
    };
    return (
        <>
            <div style={styles} className="card">
                <h2>i got this from a server wow</h2>
                {list.map((item) => {
                    return <p>{item.name.common}</p>;
                })}
            </div>
        </>
    );
}

export default ServerCard;
