import { useState } from "react";


const AuthorForm = props => {
    const [name, setName] = useState()
    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;