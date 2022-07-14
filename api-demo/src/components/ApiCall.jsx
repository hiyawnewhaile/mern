import axios from "axios";
import { useEffect, useState } from "react";

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [inputPokemon, setInputPokemon] = useState("");
    const [apiPokemon, setApiPokemon] = useState("charmander")
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + apiPokemon)
            .then(res => {
                setPokemon(res.data)
                setError(null)
            })
            .catch(err => setError(err))
    }, [apiPokemon])
    // ^ This is called a dependancy array and what it does is any time something in that array changes it triggers useEffect
    // However, if you FORGET to put an array in there (even an empty one) the useEffect will call infinitely

    const fetchPokemon = e => {
        e.preventDefault();
        setApiPokemon(inputPokemon);
    }

    return(
        <div>
            <h2>My API call</h2>
            <input type="text" name="newPokemon" onChange={(e) => setInputPokemon(e.target.value)}/>
            <input type="submit" value="Fetch Pokemon" onClick={fetchPokemon}/>
            <br />
            {
                error ? <h3>Error, Please try again</h3> : pokemon ? <>
                    <img src={pokemon.sprites.front_default} alt="sprite" />
                    <h3>My Pokemon: {pokemon.name}</h3>
                    </> : ""
            }
        </div>
    );
}

export default ApiCall;