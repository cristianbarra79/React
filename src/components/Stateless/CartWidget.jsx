import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'

const CartWidget = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div>
            <ShoppingCartIcon/>
            {carrito.length}
        </div>
    )
}

export default CartWidget
