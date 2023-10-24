import './PokeElement.css'
import React from 'react';

function PokeElement({ url , index }){
 
  const [pokemonInfo, setPokemonInfo] = React.useState({ name: '', index: '', sprite: '', types: [] });

  React.useEffect(() => {
    getPokemon(url, index)
      .then(info => {
        setPokemonInfo(info);
      })
  });


    return (
        <div className= "pokeElement"> 
        <h1 className='pokeName'> { pokemonInfo.name }<p className='pokeIndex'> { pokemonInfo.index } </p></h1>
        <img className='pokePic' src = { pokemonInfo.sprite } alt='Pokemon'></img>
        <ul className='typeList'>
          {pokemonInfo.types.map((type, index) => (
            <li className='typeListElement' key={index}>{type}</li>
          ))}
        </ul>
        
         </div>
    )
}

export default PokeElement;


async function getPokemon(url, inde){
  try {
    const response = await fetch(url);
    var data = await response.json();
    
    const name = data.name.toString();
    const index = "#" + inde;
    const sprite = data.sprites.front_default.toString();
    const types = data.types.map(typeData => typeData.type.name);
  
    return {
      name,
      index,
      sprite,
      types
    };
  } catch (error) {
    console.log(error)
  }
  }