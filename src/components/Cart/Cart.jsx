import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'

const Cart = () => {

    const {carrito, setCarrito} = useContext(CartContext)    

    const limpiar = () => {
        setCarrito([])
    }

    return (
        <div>
            <h1>Cart</h1>
            {carrito && carrito.map(item => <h2 key={item.id}>{`Producto ${item.nombre} por ${item.cantidad} subtotal de $${item.cantidad * item.precio}`}</h2>)}
            <button onClick={limpiar}>Limpiar carrito</button>
        </div>
    )
}

export default Cart