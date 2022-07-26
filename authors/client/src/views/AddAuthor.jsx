import AuthorForm from "../components/AuthorForm";
import { Link } from "react-router-dom";

const AddAuthor = props => {
    return(
        <div>
            <Link to={'/'}><h4>Home</h4></Link>
            Add a new author:
            <AuthorForm/>
        </div>
    )
};

export default AddAuthor;