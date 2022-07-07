import { useState } from 'react';

function FormCard() {
    const [formVal, setFormVal] = useState({ value: 'created with useState' });

    function handleChange(event) {
        setFormVal({ value: event.target.value });
        console.log(formVal);
    }
    function handleSubmit(event) {
        alert('this was submmited: ' + formVal.value);

        event.preventDefualt();
        setFormVal({ value: formVal.value });
    }

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    };

    return (
        <div style={styles} className="card" id="formCard">
            <form style={styles} onSubmit={handleSubmit}>
                <label>type words:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    id="nameInput"
                    placeholder={formVal.value}
                />

                <input type="submit" value="Submit" />
            </form>
            <h2>{formVal.value}</h2>
        </div>
    );
}
export default FormCard;
