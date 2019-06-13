import React from "react";
import { Link } from "gatsby";
import NavStyles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={NavStyles.nav}>
            <Link to="/" className={NavStyles.text}>UDIT DESAI</Link>
            <div className={NavStyles.rightNav}>
                <a href="/" className={NavStyles.link}>RESUME</a>
                <a href="/" className={NavStyles.link}>CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;
