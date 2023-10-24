import Button from "../Common/Button";
import "./NavbarTop.js.css";


function navBar() {
    return (
      <ul className="navBar">
        <li className="navItem"><Button text= { "Home" } url={ "Home" }/></li>
        <li className="navItem"><Button text= { "About Us" } url={ "AboutUs" }/></li>
        <li className="navItem"><Button text= { "The pokedex" } url={ "ThePokedex" }/></li>
        <li className="navItem"><img id = "pokeBall" src="./Images/favicon.ico" alt="PokeBall" className="pokeBall"></img></li>
        
      </ul>
    );
  }

  
  export default navBar;