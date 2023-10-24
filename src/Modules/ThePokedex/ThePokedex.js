import React, { useEffect, useState } from 'react';
import "./ThePokedex.css";
import PokeElement from "./PokeElement";
import PokeDetails from "./PokeDetails";

var oldPokeName = "";
function ThePokedex() {
  const [pokemonList, setPokemonList] = useState([]); /* Holds info of the names and indexes of the pokemon */
  const [offSet, setOffset] = useState(0); /* Holds info on the offset of the pokeapi*/
  const [selectedPokemon, setSelectedPokemon] = useState(null); /* Holds infor on which pokemon is selected in the list */

  //Useeffect initially loads the scene
  useEffect(() => {
    CreatePokeList(offSet).then(info => {
      setPokemonList(info);
    });
  }, [offSet]);/*When the offSet is changed the view should be updated */

  //Two methods that changes the offset (How high in the list we are)
  const fetchNextData = () => {
    setOffset(offSet + 10);
  };

  const fetchPreviousData = () => {
    if (offSet > 0) {
      setOffset(offSet - 10);
    }
  };

  //When a pokemon is clicked the details is opened and closed in a seperate div. See pokeDetails
  const OpenPokemon = (pokemonName) => {
    /* A check to see if a pokemon is clicked*/
    if (oldPokeName === pokemonName) {
      oldPokeName = "";
      setSelectedPokemon({
        name: null,
        sprite: null,
        weight: null,
        height: null,
        types: null,
      });
    } else {
      // Fetch data for the selected Pokemon and update the state
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
          setSelectedPokemon({
            name: data.name,
            sprite: data.sprites.front_default,
            weight: data.weight,
            height: data.height,
            types: data.types.map(type => type.type.name),
          });
          oldPokeName = pokemonName;
        });
    }
  };

   /*Gets a list of the pokemon that is used in the list*/
  async function CreatePokeList(offset) {
    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const names = data.results.map(pokemon => pokemon.name);
      return names;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //All the html
  return (
    <div className="fixed">
      <PokeDetails pokemon={selectedPokemon} /> 
      <div className="pokeDiv">
        <ul className="pokedexList">
          <li className="buttonDiv">
            <button className="nextButton" onClick={fetchPreviousData}>Previous</button>
            <button className="nextButton" onClick={fetchNextData}>Next</button>
          </li>
          {pokemonList.map((pokemonName, index) => (
            <li className="pokedexEntry" key={index}>
              <div onClick={() => OpenPokemon(pokemonName)}>
                <PokeElement url={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`} index={offSet + index + 1} />
              </div>
            </li>
          ))}
          <li className="buttonDiv">
            <button className="nextButton" onClick={fetchPreviousData}>Previous</button>
            <button className="nextButton" onClick={fetchNextData}>Next</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ThePokedex;