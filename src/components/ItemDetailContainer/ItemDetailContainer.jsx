import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { listado } from '../../data/data';
import ItemDetail from '../ItemDetail.jsx/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] =useState(true)

    const {id} = useParams()

    const getProduct = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        let resultado = listado.find(element => element.id == id);        
        resolve(resultado)
      },2000)      
    })
    
    const setProducts = async () => {
      try {
        const result = await getProduct;
        setLoading(false)
        setProducto(result);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      setProducts();
    }, []);

    return (
        <div>
            {loading ? <h2>Cargando...</h2> : producto && <ItemDetail id={producto.id} title={producto.title} price={producto.price} description={producto.description} image={producto.image} count={producto.rating.count} category={producto.category} /> }
        </div>
    )
}

export default ItemDetailContainer
