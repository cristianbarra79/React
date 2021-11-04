import React from 'react'
import {useState} from 'react'
import "./CartForm.css"

const CartForm = ({generarOrden}) => {

    const [datos, setDatos] = useState({
        name:'',
        phone:'',
        email: ''
        }
    )



    const confirmar = (e) =>{
        e.preventDefault()
        for (var key in datos) {
            
            if (datos[key] == null || datos[key] == ""){
                alert("Hay campos vacios")
                return;        
            }
        }        
        generarOrden(datos)
    }

    const handleChange=(e)=>{
        setDatos(
            {
                ...datos,
                [e.target.name]: e.target.value
            }    
        )        
    }
    
    return (
        <form onSubmit={confirmar} onChange={handleChange}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" defaultValue={datos.name}/><br />
            <label htmlFor="phone">Telefono:</label>
            <input type="text" name="phone" defaultValue={datos.phone}/><br />
            <label htmlFor="email">E-mail:</label>
            <input type="text" name="email" defaultValue={datos.email}/><br />
            <button>Finalizar compra</button>
        </form>
    )
}

export default CartForm
