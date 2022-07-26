import AuthorForm from "../components/AuthorForm";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditAuthor = props => {
    const [loaded, setLoaded] = useState(false);
    const [authors, setAuthors] = useState("");
    const [errors, setErrors] = useState(null)
    const { _id } = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + _id)
            .then((res) => {
                setAuthors(res.data[0])
                setLoaded(true)
            })
            .catch((err) => console.log(err));
    }, [_id]);
    const editAuthors = name => {
        axios
        .put('http://localhost:8000/api/authors/update/' + _id, {name})
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
            Edit this author:
            {
                loaded && <AuthorForm submitFunction={editAuthors} errors={errors} authorToEdit={authors}/>
            }
        </div>
    )
}

export default EditAuthor;