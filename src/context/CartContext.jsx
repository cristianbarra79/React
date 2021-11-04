import {useState, createContext} from 'react'

export const CartContext =  createContext([])

export function CartContextProvider({children}) {

    const [carrito, setCarrito] = useState([])
    const [orden, setOrden] = useState({ buyer: { nombre : "cristian", tel : "2245511594", mail : "cristianbarra79@gmail.com" }, items: [], total:0  })

    const agregarACarrito = (item) => {
        if (carrito.some(el => el.id === item.id)) {
            let nuevoCarro = carrito
            let indexProducto = nuevoCarro.findIndex(x => x.id === item.id);            
            nuevoCarro[indexProducto].cantidad = nuevoCarro[indexProducto].cantidad + item.cantidad;
            setCarrito(nuevoCarro)           
        }else{
            setCarrito([...carrito, {id: item.id, nombre:item.nombre, cantidad: item.cantidad, precio:item.precio}])
        }
    }
    const limpiarCarrito = () => {
        setCarrito([])
    }

    const eliminarItem = (id) => {
        const filtro = carrito.filter(num => num.id != id)
        setCarrito(filtro)
    }
    
    const itemsTotales = () => {
        return carrito.reduce( (total, item)=> total + item.cantidad, 0)        
    }
    

    const generarOrden = () =>{
        let viejaOrden = orden;
        viejaOrden.items = carrito;
        const {items} = viejaOrden
        items.forEach((value) =>{
            viejaOrden.total += value.cantidad * value.precio
        })
        console.log(viejaOrden);
        setOrden(viejaOrden)
    }

    return (
        <CartContext.Provider value={{carrito, agregarACarrito, setCarrito, limpiarCarrito, eliminarItem, generarOrden, itemsTotales}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;