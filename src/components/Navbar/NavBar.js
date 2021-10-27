import React from 'react'
import CartWidget from '../Stateless/CartWidget'
import {Link} from 'react-router-dom'

import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'

import "./NavBar.css"

const Navbar = () => {
    const categoria = ["ropa", "electronica", "joyeria"]

    const {carrito} = useContext(CartContext)

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
            {carrito.length ? 
                <Link to="/cart">
                    <CartWidget/>
                </Link>
            
                : null
            }
            
            
        </header>
    )
}

export default Navbar
