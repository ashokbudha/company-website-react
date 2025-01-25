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
                        {/* <li><a href="index.html">Home</a></li> */}
                        <Link to="/"><li>Home</li></Link>
                        {/* <li><a href="portfolio.html">Portfolio</a></li> */}
                        <Link to="/portfolio"><li>Portfolio</li></Link>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
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