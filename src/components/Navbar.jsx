const apiUrl = "https://ih-beers-api2.herokuapp.com/beers"
import { Link, BrowserRouter as Router } from "react-router-dom";
import '/public/navbar.css'





function Navbar() {
return (
    <nav id="nav-bar">

        <Link to='/'><button>Home</button></Link>
    </nav>
)

}

export default Navbar;
