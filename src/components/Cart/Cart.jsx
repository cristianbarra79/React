import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import './Cart.css'
import CartForm from '../CartForm/CartForm.jsx';

const Cart = () => {

    const {carrito, limpiarCarrito, eliminarItem, generarOrden} = useContext(CartContext)    

    const precioTotal = () =>{
        let total = 0
    
        carrito.forEach((value) =>{
            total += value.cantidad * value.precio
        })
        total = total.toFixed(2);
        return total
    }    

    return (
        <div>
            {carrito.length ?
                <>
                    {carrito && carrito.map(item => 
                        <article key={item.id} className="item">
                            <h2>{item.nombre}</h2>
                            <span>{`Precio: $${Number(item.cantidad * item.precio).toFixed(2)}`}</span>                            
                            <span>{`Cantidad: ${item.cantidad}`}</span>
                            <Button onClick={() => eliminarItem(item.id)} variant="outlined" startIcon={<DeleteIcon />}>
                                Borrar
                            </Button>
                        </article>
                        )}
                        
                        <h1>Total: ${precioTotal()}</h1>
                        <Button onClick={limpiarCarrito} variant="outlined" color="error">
                            Limpiar carrito
                        </Button>                                 
                        <CartForm generarOrden={generarOrden}/>
                </>
            :
               <>
                    <h1>Carrito vacio</h1>
                    <Button variant="outlined">
                        <Link to={`/`}>Home</Link>
                    </Button>
               </>
            }
        </div>
    )
}

export default Cart