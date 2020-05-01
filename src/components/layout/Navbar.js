import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <nav className="cyan darken-1">
                    <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Tweet Data</Link>
                        <a href="/" data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/symptom">Symptom</Link>
                            </li>
                            <li>
                                <Link to="/term">Term</Link>
                            </li>
                            <li>
                                <Link to="/hashtag">Hash Tag</Link>
                            </li>
                            <li>
                                <Link to="/emoji">Emoji</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-nav">
                <li className="sidenav-close">
                    <Link to="/">Home</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/symptom">Symptom</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/term">Term</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/hashtag">Hash Tag</Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/emoji">Emoji</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;