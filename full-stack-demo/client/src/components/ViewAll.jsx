import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAll = props => {
    const [games, setGames] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
        .then(res => setGames(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h1>All Games</h1>
            <div className="flex">
                {
                    games ? games.map((item, i) => <Link to={`/game/${item._id}`}><div key={i} className="card">
                        <h3>{item.title}</h3>
                        <img src={item.art} alt="image_art" />
                        <h4>Minimum players required: {item.minPlayers}</h4>
                    </div></Link>) : ""
                }
            </div>
        </div>
    )
};

export default ViewAll;