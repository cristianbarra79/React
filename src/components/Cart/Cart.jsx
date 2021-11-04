import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import './Cart.css'
import CartForm from '../CartForm/CartForm.jsx';

const Cart = () => {

    const {carrito, limpiarCarrito, eliminarItem, generarOrden} = useContext(CartContext)    

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
                <>
                {carrito && carrito.map(item => 
                    <article key={item.id} className="item">
                        <h2>{item.nombre}</h2>
                        <span>{`Precio: $${item.cantidad * item.precio}`}</span>
                        <span>{`Cantidad: ${item.cantidad}`}</span>
                        <button onClick={() => eliminarItem(item.id)}>X</button>                    
                    </article>
                    )}
                    
                    <h2>Total: ${precioTotal()}</h2>
                    <Button onClick={limpiarCarrito} variant="outlined" color="error">
                        Limpiar carrito
                    </Button>                                 
                    <CartForm generarOrden={generarOrden}/>                    
            </>
            :
               <><h2>Carrito vacio</h2>
               <Link to={`/`}>Home</Link></>
            }            
        </div>
    )
}

export default Cart