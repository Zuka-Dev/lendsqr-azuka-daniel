import React, { useState } from "react";
import Logo from "../Logo";
import "./NavBar.scss";
import bell from "../../assets/notifyIcon.png";
import avatar from "../../assets/Avatar.png";
import down from "../../assets/down.png";
import search from "../../assets/Search.png";

const NavBar: React.FC = () => {
  
    return (
        <section>
            <Logo />
            <div className="search">
                <input type="text" placeholder="Search for anything" />
                <button>
                    <img src={search} alt="search" />
                </button>
            </div>
            <div className="last-div">
                <p className="docs">Docs</p>
                <img className="notify" src={bell} alt="bell" />
                <div className="info">
                    <img src={avatar} alt="avatar" /> Adedeji
                </div>
                <img className="options" src={down} alt="down" />
            </div>
            

         
        </section>
    );
};

export default NavBar;
