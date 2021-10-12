import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({title, price, description, image, count, category}) => {
    
    return (
        <div className="contenedor">
            
            <h1>{title}</h1>
            <img src={image} alt={category} />                
            <h2>{description}</h2>   
            <h3>${price}</h3>            
            <div className="count">
                <ItemCount stock={count} initial={1}/>
                <button>comprar</button>
            </div>
        </div>        
    )
}

export default ItemDetail
