import React from 'react'
import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
            
            if (datos[key] === null || datos[key] === "" || datos[key] === " "){
                alert("Hay campos vacios")
                return;        
            }
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(datos.email))){ /* eslint-disable-line */
            alert("Ingrese un mail valido")
            return; 
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
            <TextField
                type="text" name="name" defaultValue={datos.name}
                id="outlined-required"
                label="Nombre"                
            />            
            <TextField
                type="text" name="phone" defaultValue={datos.phone}
                id="outlined-required"
                label="Telefono"                
            />            
            <TextField
                type="text" name="email" defaultValue={datos.email}
                id="outlined-required"
                label="Email"                
            />
            <br />
            <Button onClick={confirmar} variant="contained" color="success">                
                Finalizar compra
            </Button>           
        </form>
    )
}

export default CartForm
