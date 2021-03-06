import React from 'react'
import CartWidget from '../Stateless/CartWidget'
import {Link} from 'react-router-dom'

import "./NavBar.css"

const Navbar = () => {

    const categoria = ["women's clothing", "men's clothing", "electronics", "jewelery"]    

    return (
        <header>
            <h1>
                <Link to="/">
                    e-commerce
                </Link>
            </h1>
            <nav>
                <ul>
                    {categoria.map((nombre) => <li key={nombre}><Link to={`/category/${nombre}`}>{nombre}</Link></li>)}                    
                </ul>
            </nav>
            <Link to="/cart">
                <CartWidget/>                    
            </Link>            
        </header>
    )
}

export default Navbar
