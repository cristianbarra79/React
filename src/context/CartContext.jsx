import {useState, createContext} from 'react'

export const CartContext =  createContext([])

export function CartContextProvider({children}) {

    const [carrito, setCarrito] = useState([])

    const agregarACarrito = (item) => {
        if (carrito.some(el => el.id === item.id)) {
            let indexProducto = carrito.findIndex(x => x.id === item.id);            
            carrito[indexProducto].cantidad = carrito[indexProducto].cantidad + item.cantidad;            
        }else{
            setCarrito([...carrito, {id: item.id, nombre:item.nombre, cantidad: item.cantidad, precio:item.precio}])
        }
    }

    return (
        <CartContext.Provider value={{carrito, agregarACarrito, setCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;