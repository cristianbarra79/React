import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail.jsx/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] =useState(true)

    let product = {      
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    }
    
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });

    
    const setProducts = async () => {
      try {
        const result = await getProducts;
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
            {loading ? <h2>Cargando...</h2> : producto && <ItemDetail title={producto.title} price={producto.price} description={producto.description} image={producto.image} count={producto.rating.count} category={producto.category} /> }
            
        </div>
    )
}

export default ItemDetailContainer
