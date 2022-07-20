import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = (props) => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        art: "",
        minPlayers: 1,
    });
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/games/" +_id)
            .then(res => setForm(res.data[0]))
            .catch(err => console.log(err))
    }, [_id]);
    const [errors, setErrors] = useState({});
    const onChangeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const formHandler = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/games/update/" + _id, form)
            .then((res) => {
                // If we did it wrong
                if (res.data.error) {
                    console.log("Something went wrong!");
                    setErrors(res.data.error.errors);
                } else {
                    // If we did it right
                    console.log("We made it!");
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Update Game</h1>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={onChangeHandler}
                    />
                    {errors.title ? <span>{errors.title.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="art">Cover Art</label>
                    <input
                        type="text"
                        name="art"
                        value={form.art}
                        onChange={onChangeHandler}
                    />
                    {errors.art ? <span>{errors.art.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="minPlayers">Minimum # of Players</label>
                    <input
                        type="number"
                        name="minPlayers"
                        value={form.minPlayers}
                        onChange={onChangeHandler}
                    />
                    {errors.minPlayers ? <span>{errors.minPlayers.message}</span> : ""}
                </div>
                <div>
                    <input type="submit" value="Update Game" />
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;
