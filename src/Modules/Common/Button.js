import "./Button.js.css";
import { Link } from 'react-router-dom';

function Button({ text ,  url }) {
    return(
        <Link to={'/' + url} className="nav-link"><button id = "button"  > { text } </button></Link>
    )
  }

  export default Button;