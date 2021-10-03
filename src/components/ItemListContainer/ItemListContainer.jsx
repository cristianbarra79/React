import React from 'react'
import Item from '../Item/Item'
import { Grid } from '@material-ui/core'

const ItemListContainer = ({greeting}) => {
    
   let producto = {
       nombre : "Hamburguesa",
       descripcion : "Hamburguesas caseras, elaboradas con materia prima fresca y de calidad",
       stock : 5
   }

   
    
    return (        
        <div>
            <h2 style={{color: "red"}}>{greeting}</h2>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"                
                >
                <Item nombre={producto.nombre} descripcion={producto.descripcion} stock={producto.stock} initial={1}/>
            </Grid> 
        </div>
    )
}

export default ItemListContainer
