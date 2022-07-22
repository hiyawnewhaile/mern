import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

const EditProduct = props => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    });
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" +_id)
            .then(res => setForm(res.data[0]))
            .catch(err => console.log(err))
    }, [_id]);
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const formHandler = e => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/products/update/" + _id, form)
            .then((res) => {
                if(res.data.error){
                    console.log("Something went wrong");
                    setErrors(res.data.error.errors)
                } else {
                    console.log("We made it!");
                    navigate("/")
                }
            })
            .catch((err) => console.log(err));
    };
    return(
        <div>
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
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
        </div>
    )
}

export default EditProduct;