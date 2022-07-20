import { useState } from 'react';

const AddForm = props => {
    const [form, setForm] = useState({
        title: "",
        art: "",
        minPlayers: 1
    });

    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const formHandler = e => {
        e.preventDefault();
    };

    return(
        <div>
            <h2>Add Game</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor="title">Cover Art</label>
                    <input type="text" name="title" onChange={onChangeHandler} />
                </div>
            </form>
        </div>
    )
}

export default AddForm;