import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"

const Item = ({id, nombre, descripcion, stock, img, precio, initial}) => {

    return (
        <article>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={nombre}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>                    
                </CardContent>
                <Typography variant="h4" color="text.primary">
                    ${precio}
                </Typography>
                <ItemCount stock={stock} initial={initial}/>                                
                <CardActions>
                    <Button>
                        <Link to={`/item/${id}`}>Detalles</Link>
                    </Button>                  
                    <Button variant="contained" size="small">Comprar</Button>
                </CardActions>
            </Card>
        </article>
    )
}

export default Item
