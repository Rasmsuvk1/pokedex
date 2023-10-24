import React from 'react';
import "./PokeDetails.css"

function PokeDetails({ pokemon }) {
  
  //If the pokemon isnt "focused" or set to null, nothing will be displayed.
  if (pokemon === null || pokemon.name === null) {
    return null;
  }
  const { name, weight, height, sprite, types } = pokemon;

  //If a pokemon is clicked it will show the following html
  return (
    <div className='Pokedetails'>
      <h1>{name}</h1>
      <img className = "pokePic" src={sprite} alt={name} />
      <p className='bold'>Wheight:{weight}</p>
      <p className='bold'>Height: {height}</p>
      <p className='bold'>Types: {types.join(', ')}</p>
    </div>
  );
    
}

export default PokeDetails;
