import React from 'react'
import { useEffect, useState } from 'react'
import {getFirestore} from '../../services/getFirebase'
import { useParams } from "react-router";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams() 
    
    const getProducts = () => {
        
        if (category) {
            const base = getFirestore();
            const itemColletion = base.collection("items").where('categoria', '==', category)
            itemColletion.get()
                .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
                .catch(err => console.log(err))
                .finally(setLoading(false))
        }else{            
            const base = getFirestore();
            const itemColletion = base.collection("items")
            itemColletion.get()
                .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
                .catch(err => console.log(err))
                .finally(setLoading(false))
        }
    }
    
    useEffect(() => {
        getProducts()
        // setTimeout(() => {            
        //     getProducts()
        // }, 2000);    
    }, [category])

    return (        
        <div>
            <h2 style={{color: "red"}}>{greeting}</h2>
            {loading ? <h1>Cargando</h1> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListContainer
