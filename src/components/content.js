import React from "react";
import menuLogo from "../menu.svg";

function Content({toggleMenu}) {

    return (
        <div>
            <img src={menuLogo} onClick={toggleMenu} width="30" height="30" alt="menu" className="menu-logo"/>
            <div className="title">START</div>
        </div>
    );
}

export default Content;
