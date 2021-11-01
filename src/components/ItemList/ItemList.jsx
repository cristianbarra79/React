import React from 'react'
import Item from '../Item/Item'
import { Grid } from '@material-ui/core'
import { memo } from 'react'


const ItemList = memo(
    ({items}) => {

    return (
        <div>
            {items.length ?
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-evenly"                
                    >
                        {items && items.map((prod) => <Item key={prod.id} id={prod.id} nombre={prod.titulo} descripcion={prod.descripcion} stock={prod.cantidad} img={prod.imagen} precio={prod.precio} initial={1}/>)}                
                </Grid>
            : <h1>Cargando...</h1>}
        </div>
    )
}
, (oldProps, newProps)=> oldProps.items.length === newProps.items.length)

export default ItemList