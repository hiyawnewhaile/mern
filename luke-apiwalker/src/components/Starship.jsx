import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import obi from '../obi.webp';


const Starship = props => {
    const { id } = useParams();
    const [ship, setShip] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/" + id)
            .then(res => {
                setShip(res.data);
                setError(null);
            })
            .catch(err => setError(err))
    }, [id])
    return(
        <div>
            {
                    error? <div>
                    <img src={obi}alt="obi" />
                    <p>"These aren't the droids you're looking for"</p>
                    </div>
                :
                ship ? <div>
                    <h1>{ship.name}</h1>
                    <h4>Model: {ship.model}</h4>
                    <h4>Manufacturer: {ship.manufacturer}</h4>
                    <h4>Cost: {ship.cost_in_credits} credits</h4>
                    <h4>Max Atmosphering Speed: {ship.max_atmosphering_speed}</h4>
                </div>
                    :
                ""
            }
        </div>
    );
}

export default Starship;