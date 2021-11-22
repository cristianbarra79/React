import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext.jsx'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, title, price, description, image, count, category}) => {

    const {agregarACarrito} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        agregarACarrito({nombre:title, id: id, cantidad:cantidad, precio: price})        
    }
               
    return (
        <div className="contenedor">            
            <h1>{title}</h1>
            <img src={image} alt={category} />                
            <p>{description}</p>   
            <h3>Precio: ${price}</h3>            
            <ItemCount className="count" stock={count} initial={1} onAdd={onAdd}/>            
        </div>        
    )
}

export default ItemDetail

