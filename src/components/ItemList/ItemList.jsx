import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import { Grid } from '@material-ui/core'

const ItemList = ({producto}) => {

    const [productos, setProductos] = useState(null)    


    const getProductos = async () => {            
        
        setProductos(producto)                    
    }

    useEffect(() => {
        setTimeout(() => {            
            getProductos()
        }, 2000);
        
    }, [])

    return (
        <div>

            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="flex-start"
                justifyContent="space-evenly"                
                >
                    {productos && productos.map((prod) => <Item key={prod.id} nombre={prod.title} descripcion={prod.description} stock={prod.rating.count} img={prod.image} precio={prod.price} initial={1}/>)}                
            </Grid>
        </div>
    )
}

export default ItemList
