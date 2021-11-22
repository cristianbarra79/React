import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from "react-router";
import {getFirestore} from '../../services/getFirebase'
import ItemDetail from '../ItemDetail.jsx/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] =useState(true)
    const {id} = useParams()

    const getProduct = () =>{
      const base = getFirestore();
            const itemColletion = base.collection("items").doc(id)
            itemColletion.get()
                .then(resp => setProducto({id: resp.id, ...resp.data() }))
                .catch(err => console.log(err))
                .finally(setLoading(false))
    }
    
    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading ? 
                <h2>Cargando...</h2> 
            : 
                producto && <ItemDetail id={producto.id} title={producto.titulo} price={producto.precio} description={producto.descripcion} image={producto.imagen} count={producto.cantidad} category={producto.categoria} /> 
            }
        </div>
    )
}

export default ItemDetailContainer
