import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import obi from '../obi.webp';


const People = props => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then(res => {
                setPerson(res.data);
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
                person ? <div>
                    <h1>{person.name}</h1>
                    <h4>Height: {person.height}</h4>
                    <h4>Mass: {person.mass}</h4>
                    <h4>Hair Color: {person.hair_color}</h4>
                    <h4>Skin Color: {person.skin_color}</h4>
                </div>
                    :
                ""
            }
        </div>
    );
}

export default People;