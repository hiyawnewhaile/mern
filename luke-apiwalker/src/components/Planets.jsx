import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import obi from '../obi.webp';

const Planets = props => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
            .then(res => {
                setPlanet(res.data)
                setError(null)
            })
            .catch(err => {
                setError(err)
            })
        }, [id])
    return(
        <div>
            {
                error? <div>
                    <img src={obi}alt="obi" />
                    <p>"These aren't the droids you're looking for"</p>
                    </div>
                :
                planet ? <div>
                    <h1>{planet.name}</h1>
                    <h4>Climate: {planet.climate}</h4>
                    <h4>Terrain: {planet.terrain}</h4>
                    <h4>Surface Water: {planet.surface_water}</h4>
                    <h4>Population: {planet.population}</h4>
                </div>
                :
                ""
            }
        </div>
    );
}

export default Planets;