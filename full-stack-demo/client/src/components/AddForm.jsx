import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        art: "",
        minPlayers: 1
    });
    const [errors, setErrors] = useState({})
    const onChangeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/games/create", form)
            .then(res => {
                // If we did it wrong
                if (res.data.error) {
                    console.log("Something went wrong!")
                    setErrors(res.data.error.errors)
                } else {
                    // If we did it right
                    console.log("We made it!")
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Add Game</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={form.title} onChange={onChangeHandler} />
                    {errors.title ? <span>{errors.title.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="art">Cover Art</label>
                    <input type="text" name="art" value={form.art} onChange={onChangeHandler} />
                    {errors.art ? <span>{errors.art.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="minPlayers">Minimum # of Players</label>
                    <input type="number" name="minPlayers" value={form.minPlayers} onChange={onChangeHandler} />
                    {errors.minPlayers ? <span>{errors.minPlayers.message}</span> : ""}
                </div>
                <div>
                    <input type="submit" value="Add Game" />
                </div>
            </form>
        </div>
    )
}

export default AddForm;