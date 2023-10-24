import "./../../CSS/GeneralStyling.css";


function Home(){

    return(
        	<div className="mainBody">
                <h1>Welcome to your personal pokedex</h1>
                <div className="text">
                <p>There are a lot to learn about pokemons so lets get started!</p>
                <img src="./Images/Mudkip.png" alt="Mudkip" className="pokemon"></img>
                <img src="./Images/Charizard.png" alt="Charizard" className="pokemon"></img>
                <img src="./Images/Pikachu.png" alt="Pikachu" className="pokemon" id= "Cubone"></img>
                <img src="./Images/Cubone.png" alt="Cubone" className="pokemon" id= "Cubone"></img>
                <img src="./Images/Eevee.png" alt="Charizard" className="pokemon"></img>
                </div>
            </div>
            
    )

}

export default Home;