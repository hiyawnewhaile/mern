import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewAll = (props) => {
    const [games, setGames] = useState(null);
    const [update, setupdate] = useState(false)
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/games")
            .then((res) => setGames(res.data))
            .catch((err) => console.log(err));
    }, [update]);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8000/api/games/delete/" + id)
            .then(() => setupdate(!update))
            .catch((err) => console.log("Issue deleting", err));
    };

    return (
        <div>
            <h1>All Games</h1>
            <div className="flex">
                {games
                    ? games.map((item, i) => (
                        <div key={i} className="card">
                            <Link  to={`/game/${item._id}`}>
                                <h3>{item.title}</h3>
                                <img src={item.art} alt="image_art" />
                                <h4>Minimum players required: {item.minPlayers}</h4>
                            </Link>
                            <button onClick={() => handleDelete(item._id)}>Delete</button>
                            <Link to={`/update/${item._id}`}><button>Edit</button></Link>
                        </div>
                    ))
                    : ""}
            </div>
        </div>
    );
};

export default ViewAll;
