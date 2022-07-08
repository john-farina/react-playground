import { useState } from 'react';

function FsPhoneBook() {
    const cString = '<full-stack-open.projects />';
    const [people, setPeople] = useState([
        {
            name: 'John Farina',
        },
    ]);
    const [newName, setNewName] = useState('');

    return (
        <>
            <h1 className="fullstackHead">{cString}</h1>
            <div className="card phoneBookCard">
                <h2>Phone Book</h2>
                <form>
                    <div>
                        name: <input type="text" />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
                <h2>Numbers</h2>
            </div>
        </>
    );
}
export default FsPhoneBook;
