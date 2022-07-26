import AuthorForm from "../components/AuthorForm";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddAuthor = props => {
    const [errors, setErrors] = useState(null);
    const addAuthor = name => {
        axios
            .post('http://localhost:8000/api/authors/create', {name})
            .then((res) => {
                if(res.data.error){
                    console.log("Something went wrong");
                    setErrors(res.data.error.errors)
                } else {
                    console.log("We made it!");
                }
            })
            .catch((err) => console.log(err))
    }
    return(
        <div>
            <Link to={'/'}><h4>Home</h4></Link>
            Add a new author:
            <AuthorForm submitFunction={addAuthor} errors={errors} authorToEdit={""}/>
        </div>
    )
};

export default AddAuthor;