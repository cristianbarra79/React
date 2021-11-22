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
                <>
                    <Button color="error" onClick={() => cantidad > 1 ? restar() : alert("Ingrese cantidad")}>-</Button>
                    <p>{cantidad}</p>
                    <Button color="success" onClick={() => cantidad < stock ? sumar() : alert("No hay mas stock")}>+</Button>                    
                    <Button variant="contained" color="secondary" onClick={agregar}>Agregar</Button>                    
                </>
            :
                <>
                    <Button sx={{mr: 2}} variant="contained">
                        <Link to={`/`}>Home</Link>
                    </Button>
                    <br />
                    <Button variant="contained">
                        <Link to={`/cart`}>TERMINAR</Link>
                    </Button>
                </>
            }
        </div>

    )
}

export default ItemCount

