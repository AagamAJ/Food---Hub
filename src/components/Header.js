import { useState } from "react";
import logoImg from "../utils/images/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
    // here we will use React state variables, because we want this variable to be changed upon click, and needs to re-render the updated variable after click.
    const [loginBtn, setLoginBtn] = useState("Login"); // initially, its value is set to "Login".

    // if we have used a normal JS variable in place of 'useState()' varaible, then the modified variable is not updated in the UI, even after its modification, because React does not know that, a variable is modified, so it has to re-render the components of that varaible. That's why, we have used useState variable in place of normal JavaScript variable.

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={logoImg}
                    onClick={() => window.location.reload()}
                />
                <div
                    className="comp-name"
                    onClick={() => window.location.reload()}
                >
                    <u>Food-Hub</u>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="hover-items">
                        <Link
                            className="link"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="hover-items">
                        <Link
                            className="link"
                            to="/about"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="hover-items">
                        <Link
                            className="link"
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className="hover-items">Cart</li>
                </ul>

                <div
                    className="login-btn hover-items"
                    onClick={() => {
                        loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}
                >
                    {loginBtn}
                </div>
            </div>
        </div>
    );
};

export default Header;
