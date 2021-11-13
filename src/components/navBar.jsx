import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Link to="/">Main</Link>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Link to="/login">Login</Link>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Link to="/users">Users</Link>
                </a>
            </li>
        </ul>
    );
};

export default NavBar;
