import { Link } from 'react-router-dom';

const AuthorsList = props => {
    return (
        <div>
            <div>
                <Link to={'/authors/addauthor'}><h4>Add an author</h4></Link>
                <div>
                    <table>
                        <thead>
                            <th>Author</th>
                            <th>Actions available</th>
                        </thead>
                        <tbody>
                            {
                            props.authors ? props.authors.sort((a, b) => a.name.localeCompare(b.name)).map((author, i) => (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/authors/editauthor/${author._id}`}><button>Edit</button></Link>
                                        <button onClick={() => props.delete(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )) : ""
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AuthorsList;