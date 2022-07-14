import axios from "axios";
import { useState, useEffect } from "react";

const Pokemon = props => {
    const [pokemon, setPokemon] = useState(null)
    // Axios
    const fetchPokemon = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => {
            setPokemon(res.data.results)
        })
        .catch(err => console.log(err))
    }

    // // Fetch
    // const fetchPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => {
    //             setPokemon(res.results)
    //         })
    //         .catch(err => console.log(err))
    // }

    return(
        <div>
            <div>
                <button onClick={fetchPokemon}>Fetch Pokemon</button>
            </div>
            <div>
                {
                    pokemon ? pokemon.map((poke) => {
                        return <p>{poke.name}</p>
                    }) : ""
                }
            </div>
        </div>
    )
}

export default Pokemon;