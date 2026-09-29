import react from "react";
import LoginPage from "./login";
import {Link} from "react-router-dom";

function Nav(props){
    return(
        <div class="CommonNav" >
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Nav;