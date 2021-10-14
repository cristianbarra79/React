import * as React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';

const ItemCount = ({stock,initial}) => {


    const [cantidad, setCantidad] = useState(initial)
    

    const onAdd = () =>{
        setCantidad(cantidad+1)
    }

    const subtract = () =>{
        setCantidad(cantidad-1)
    }


    return (
        <div className="card"> 
            <Button onClick={() => cantidad > 1 ? subtract() : alert("Ingrese cantidad")}>-</Button>
                <p>{cantidad}</p>
            <Button onClick={() => cantidad < stock ? onAdd() : alert("No hay mas stock")}>+</Button>            
        </div>

    )
}

export default ItemCount

