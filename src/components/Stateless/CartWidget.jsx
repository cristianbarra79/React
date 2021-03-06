import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'

const CartWidget = () => {

    const {itemsTotales} = useContext(CartContext)

    return (
        <div>
            <ShoppingCartIcon/>
            {itemsTotales() > 0 ? itemsTotales() : null}
        </div>
    )
}

export default CartWidget
