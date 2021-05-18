import React, { useState, useEffect } from 'react';
import './PokemonData.css';

function PokemonData({ pokemon }) {

const [offset, setOffset] = useState(0);

return (
  <>
    <div className ="pkInfo">
      <img src={pokemon.sprites.front_default} alt="Image of Pokemon" className="pkSprite"/>
      <h3 style={{gridColumnStart: "1", gridColumnEnd: "3"}}>{pokemon.id} {pokemon.name}</h3><b>
      HP:{pokemon.stats[0].base_stat} | Attack:{pokemon.stats[1].base_stat} | Defense:{pokemon.stats[2].base_stat} | 
      lbs: {pokemon.weight} | ft: {pokemon.height}</b>
      </div>
    <div className="typesMoves">
      <p><strong>Type:</strong> {pokemon.types.slice(0,4).map(type => `${type.type.name}, `)} </p>
      <p><strong>Moves:</strong> {pokemon.moves.slice(0,4).map(move => `${move.move.name}, `)} </p>
    </div>
  </>
)
}

export default PokemonData;