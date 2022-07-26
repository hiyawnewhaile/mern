import { useState } from "react";
import { Link } from "react-router-dom";


const AuthorForm = props => {
    const [name, setName] = useState()
    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <Link to={'/'}><button>cancel</button></Link>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;