import React, { useState, useEffect } from "react";
import './PokeCard.css';

function PokeCard() {
    const [pokemons, setPokemons] = useState([]); 

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
                const data = await response.json();

                
                const pokemonDetails = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const pokemonResponse = await fetch(pokemon.url);
                        const pokemonData = await pokemonResponse.json();

                        
                        return {
                            name: pokemonData.name,
                            image: pokemonData.sprites.front_default,
                            types: pokemonData.types.map((type) => type.type.name), 
                        };
                    })
                );

                setPokemons(pokemonDetails);
            } catch (error) {
                console.error("Erro ao buscar Pokémon:", error);
            }
        }

        fetchPokemons(); 
    }, []); 
    return (
        <div className="poke__container">
            {pokemons.map((pokemon, index) => (
                <div className="card" key={index}>
                    <img src={pokemon.image} alt={pokemon.name} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{pokemon.name}</h2>
                        <p className="card-category">
                            {pokemon.types.join(", ")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PokeCard;