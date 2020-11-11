import React from "react";

function Menu({toggleMenu}) {

    return (
        <div className="menu">
            <div className="name">Viktor</div>
            <div className="menu-items">
                <div className="menu-item active" onClick={toggleMenu}>Start</div>
                <div className="menu-item">Your Cart</div>
                <div className="menu-item">Favourites</div>
                <div className="menu-item">Your Orders</div>
                <div className="sign-out">Sign Out</div>
            </div>
        </div>
    );
}

export default Menu;
