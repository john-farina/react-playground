import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [darkLightMode] = useState({
        backgroundColor: '',
    });
    const [countryList, setCountryList] = useState([]);
    function hook() {
        console.log('effect');
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            console.log('promise fulfilled');
            setCountryList(response.data);
        });
    }
    useEffect(hook, []);
    console.log('got', countryList.length, ' promises fulfilled');
    return (
        <>
            <Header themeStyle={darkLightMode} />
            <Contents list={countryList} themeStyle={darkLightMode} />
        </>
    );
}

export default App;
