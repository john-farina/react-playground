function DarkLightModeCard({ onClick }) {
    const divStyle = { display: 'flex', gap: '40px' };

    return (
        <div className="card" id="darkLightMode">
            <h1>Change Website Theme</h1>
            <div style={divStyle}>
                <button onClick={onClick} id="darkMode">
                    DARK
                </button>
                <button onClick={onClick} id="lightMode">
                    LIGHT
                </button>
            </div>
        </div>
    );
}

export default DarkLightModeCard;
