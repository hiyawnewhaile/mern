import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthorsList from '../components/AuthorsList';

const ViewAll = props => {
    const [loaded, setLoaded] = useState(false);
    const [authors, setAuthors] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err));
    }, [authors]);
    const deleteHandler = id => {
        axios
            .delete("http://localhost:8000/api/authors/delete/" +id)
            .then(() => console.log("Item deleted"))
            .catch((err) => console.log("Issue deleting", err))
    }
    return (
        <div>
            {
                loaded && <AuthorsList authors={authors} delete={deleteHandler}/>
            }
        </div>
    )
}

export default ViewAll;