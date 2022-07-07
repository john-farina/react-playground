import './App.css';

import Header from './components/Header';
import Contents from './components/Contents';
import { useState } from 'react';

function App() {
    const [darkLightMode, changeTheme] = useState({
        backgroundColor: 'blue',
    });

    return (
        <>
            <Header themeStyle={darkLightMode} />
            <Contents themeStyle={darkLightMode} />
        </>
    );
}

export default App;
