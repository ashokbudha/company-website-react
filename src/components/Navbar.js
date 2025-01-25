import {Link} from "react-router";

import MyLogo from "../assets/images/logo.png";
import MyHamburgerMenu from "../assets/images/hamburger-menu.png";

const Navbar = () => {
    return(
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={MyLogo} alt="logo"/>
                    <h1>Start</h1>
                </div>
                <nav className="navbar">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/portfolio"><li>Portfolio</li></Link>
                       <Link to="/services"> <li>Services</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </nav>
                <div className="hamburgar-menu">
                    <img src={MyHamburgerMenu} alt="hamburger menu"/>
 
                </div>
            </div>
        </header>
    );
}

export default Navbar;