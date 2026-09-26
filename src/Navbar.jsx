import { useState } from "react"
import { Link, useLocation} from "wouter";

export default function Navbar() {

    const [isNavbarShowing, setNavbarShowing] = useState(false);
    const [location] = useLocation();

    const toggleNavBar = () => {
        setNavbarShowing(!isNavbarShowing);
    }

    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">E-Shop</a>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNavBar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${
                isNavbarShowing ? "show" : ""
            }`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/" ? "active": ""}`} aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/products" ? "active": ""}`} href="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location==="/register" ? "active": ""}`}href="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}