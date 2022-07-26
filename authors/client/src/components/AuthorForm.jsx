import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AuthorForm = props => {
    const navigate = useNavigate();
    const [name, setName] = useState(props.authorToEdit.name);
    const submithandler = e => {
        e.preventDefault();
        props.submitFunction(name)
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    {
                        props.errors ? <span>{props.errors.name.message}</span> 
                        : ""
                    }
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