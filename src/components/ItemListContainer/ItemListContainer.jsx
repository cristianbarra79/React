import React from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {        

    return (        
        <div>
            <h2 style={{color: "red"}}>{greeting}</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
