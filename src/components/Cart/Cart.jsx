import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'

const Cart = () => {

    const {carrito, limpiarCarrito, eliminarItem} = useContext(CartContext)    


    return (
        <div>
            <h1>Cart</h1>
            {carrito && carrito.map(item => <div key={item.id}>
                <h2>{`Producto: ${item.nombre} por ${item.cantidad} unidades. Subtotal de $${item.cantidad * item.precio}`}</h2>
                <button onClick={() => eliminarItem(item.id)}>X</button>
            </div>)}
            <button onClick={limpiarCarrito}>Limpiar carrito</button>
        </div>
    )
}

export default Cart