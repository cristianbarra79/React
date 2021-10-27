import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'
import {Link} from 'react-router-dom'

const Cart = () => {

    const {carrito, limpiarCarrito, eliminarItem} = useContext(CartContext)    

    const precioTotal = () =>{//agrega el precio total en el offcanvas
        let total = 0
    
        carrito.forEach((value) =>{
            total += value.cantidad * value.precio
        })
        return total
    }


    return (
        <div>
            <h1>Cart</h1>            
            {carrito.length ?
                
                carrito && carrito.map(item => 
                <div key={item.id}>
                    <h2>{`Producto: ${item.nombre} por ${item.cantidad} unidades. Subtotal de $${item.cantidad * item.precio}`}</h2>
                    <button onClick={() => eliminarItem(item.id)}>X</button>
                </div>):
                <Link to={`/`}>Home</Link>
                }

            <h1>Total: ${precioTotal()}</h1>

                
                
            <button onClick={limpiarCarrito}>Limpiar carrito</button>
        </div>
    )
}

export default Cart