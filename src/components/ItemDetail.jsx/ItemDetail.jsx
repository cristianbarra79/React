import React from 'react'
import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({id, title, price, description, image, count, category}) => {

    const [carrito, setCarrito] = useState([])

    const onAdd = (cantidad) =>{
        setCarrito([...carrito, {id: id, cantidad: cantidad}])
    }
               
    return (
        <div className="contenedor">            
            <h1>{title}</h1>
            <img src={image} alt={category} />                
            <h2>{description}</h2>   
            <h3>${price}</h3>            
            <ItemCount className="count" stock={count} initial={1} onAdd={onAdd}/>            
        </div>        
    )
}

export default ItemDetail

