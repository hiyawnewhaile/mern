import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddProduct = props => {
    // const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    });
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const formHandler = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/products/create", form)
            .then((res) => {
                if(res.data.error){
                    console.log("Something went wrong");
                    setErrors(res.data.error.errors)
                } else {
                    console.log("We made it!");
                }
            })
            .catch((err) => console.log(err));
    };
    return(
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={form.title} onChange={onChangeHandler}/>
                    {errors.title ? <span>{errors.title.message}</span> : "" }
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" value={form.price} onChange={onChangeHandler}/>
                    {errors.price ? <span>{errors.price.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={form.description} onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="submit" value="create" />
                </div>
            </form>
        </div>
    )
};

export default AddProduct;