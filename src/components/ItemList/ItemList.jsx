import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import { Grid } from '@material-ui/core'
import {listado} from '../../data/data'
import { useParams } from "react-router";

const ItemList = () => {

    const [productos, setProductos] = useState([])    

    const {category} = useParams()    

    const getProductos = async () => {        
        if(category){            
            switch (category) {
                case "ropa":                    
                    const soloRopa = listado.filter(categoria => categoria.category === "men's clothing" || categoria.category === "women's clothing")
                    setProductos(soloRopa)
                    break;
                case "joyeria":
                    const soloJoyas = listado.filter(categoria => categoria.category === "jewelery")
                    setProductos(soloJoyas)
                    break;
                case "electronica":
                    const soloElectronica = listado.filter(categoria => categoria.category === "electronics")
                    setProductos(soloElectronica)
                    break;            
                default:
                    setProductos(listado)
                    break;
            }
        }else{
            setProductos(listado)                        
        }
    }

    useEffect(() => {
        setTimeout(() => {            
            getProductos()
        }, 2000);
        
    }, [category])

    return (
        <div>
            {productos.length ?
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-evenly"                
                    >
                        {productos && productos.map((prod) => <Item key={prod.id} id={prod.id} nombre={prod.title} descripcion={prod.description} stock={prod.rating.count} img={prod.image} precio={prod.price} initial={1}/>)}                
                </Grid>
            : <h1>Cargando...</h1>}
        </div>
    )
}

export default ItemList
