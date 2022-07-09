import { useState } from 'react';

function FsPhoneBook() {
    const cString = '<full-stack-open.projects />';
    const [people, setPeople] = useState([
        {
            name: 'John Farina',
            number: '555-5555',
        },
        {
            name: 'greg',
            number: '535-5555',
        },
        {
            name: 'jeff',
            number: '555-5255',
        },
        {
            name: 'fredrick',
            number: '155-5555',
        },
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    function handleNameChange(event) {
        setNewName(event.target.value);
        console.log(newName);
    }
    function handleNumChange(event) {
        setNewNumber(event.target.value);
        console.log(newNumber);
    }

    function handleSubmit(event) {
        for (let i = 0; i < people.length; i++) {
            if (people[i].name === newName) {
                alert(`${newName} - has already been written`);
                return;
            }
        }
        if (newName === '') {
            return;
        }
        setPeople((old) => [...old, { name: newName, number: newNumber }]);
    }

    return (
        <>
            <h1 className="fullstackHead">{cString}</h1>
            <div className="card phoneBookCard">
                <h2>Phone Book</h2>
                <form>
                    <div>
                        name: <input onChange={handleNameChange} type="text" />
                    </div>
                    <div>
                        number: <input onChange={handleNumChange} type="tel" />
                    </div>
                </form>
                <button onClick={handleSubmit}>add</button>
                <h2>Numbers</h2>
                <ul>
                    {people.map((person) => {
                        return (
                            <li key={person.name}>
                                {person.name} - {person.number}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
export default FsPhoneBook;
