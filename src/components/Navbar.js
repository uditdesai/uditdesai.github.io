import React from "react";
import { Link } from "gatsby";
import NavStyles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={NavStyles.nav}>
            <Link to="/" className={NavStyles.text}>UDIT DESAI</Link>
            <div className={NavStyles.rightNav}>
                <a href="https://drive.google.com/file/d/1t5UnaVPL3HoxOMG1N_A36pX1UAQx5Ihu/view?usp=sharing" className={NavStyles.link}>RESUME</a>
                <a href="mailto:udit.desai3@gmail.com?subject=Hey Udit!" className={NavStyles.link}>CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;
