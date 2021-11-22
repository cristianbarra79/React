import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Item.css"

const Item = ({id, nombre, descripcion, img, precio}) => {

    return (
        <article>
            <Card sx={{ maxWidth: 345, height: '500px' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={nombre}
                    />
                <CardContent sx={{ height: '220px', overflow: "hidden"}}>
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
                <CardActions>
                    <Button variant="contained" size="small">
                        <Link to={`/item/${id}`}>Detalles</Link>
                    </Button>                    
                </CardActions>
            </Card>
        </article>
    )
}

export default Item
