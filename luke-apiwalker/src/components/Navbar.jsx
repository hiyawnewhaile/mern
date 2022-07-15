import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = props => {
    const [search, setSearch] = useState("people");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const sendForm = e => {
        e.preventDefault();
        console.log(search, id)
        navigate(`/${search}/${id}`)
    }

    return(
        <div>
            <form onSubmit={sendForm}>
                <div>
                    <label htmlFor="search">Search for: </label>
                    <select name="search" onChange={(e) => setSearch(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="ships">Starships</option>
                    </select>
                    <label htmlFor="id"> ID: </label>
                    <input type="number" name="id" onChange={(e) => setId(e.target.value)} value={id}/>
                    <input type="submit" value="Search" className="btn btn-info" />
                </div>
            </form>
        </div>
    );
}

export default Navbar;