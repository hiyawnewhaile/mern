import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewAll = props => {
    const [authors, setAuthors] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => setAuthors(res.data))
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
            <div>
                <h1>Favorite authors</h1>
                {/* <Link><h4>Add an author</h4></Link> */}
                {
                    authors ? authors.map((author, i) => (
                        <div key={i}>
                            <table>
                                <thead>
                                    <th>Author</th>
                                    <th>Actions available</th>
                                </thead>
                                <tr>
                                    <td>{author.name}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button onClick={() => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )) : ""
                }
            </div>
        </div>
    )
}

export default ViewAll;