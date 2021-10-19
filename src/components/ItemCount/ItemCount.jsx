import * as React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const ItemCount = ({stock,initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial)
    const [agregado, setAgregado] = useState(false)
    
    const sumar = () =>{
        setCantidad(cantidad+1)
    }

    const restar = () =>{
        setCantidad(cantidad-1)
    }

    const agregar = () =>{        
        onAdd(cantidad)
        setAgregado(true)
    }

    return (
        <div className="card">
            {!agregado ?
                <><Button onClick={() => cantidad > 1 ? restar() : alert("Ingrese cantidad")}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={() => cantidad < stock ? sumar() : alert("No hay mas stock")}>+</Button>
                <button onClick={agregar}>Agregar</button></>
            :
            <Button variant="contained">
                <Link to={`/cart`}>TERMINAR</Link>
            </Button>}
        </div>

    )
}

export default ItemCount

