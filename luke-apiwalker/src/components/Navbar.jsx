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
            <form onSubmit={sendForm} className="container form-control my-5">
                <div className="row">
                    <div className="col row">
                        <label htmlFor="search" className="col my-2">Search for: </label>
                        <select name="search" onChange={(e) => setSearch(e.target.value)} className="form-select col">
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="ships">Starships</option>
                        </select>
                    </div>
                    <div className="col row">
                        <label htmlFor="id" className="col my-2"> ID: </label>
                        <input type="number" name="id" onChange={(e) => setId(e.target.value)} value={id} className="form-control col mx-5"/>
                    </div>
                    <input type="submit" value="Search" className="col btn btn-info mx-2"/>
                </div>
            </form>
        </div>
    );
}

export default Navbar;