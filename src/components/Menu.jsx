import React from 'react'
const Menu = ({total, countcart}) => {
    console.log(countcart);
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <span>Total : {total} </span>
                <span>Cart:(<b>{countcart}</b>) </span>
            </nav>
        )
    
}

export default Menu;