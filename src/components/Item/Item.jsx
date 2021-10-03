import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"

const Item = ({nombre,descripcion,stock, initial}) => {

    return (
        <article>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://media.revistagq.com/photos/5f08621564f52a842c7f9a83/3:4/w_2262,h_3016,c_limit/hamburguesa%20the%20fitzgerald.jpg"
                    alt="burguer"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {descripcion}
                    </Typography>
                </CardContent>

                <ItemCount stock={stock} initial={initial}/>
                
                
                <CardActions>                                        
                    <Button size="small">Comprar</Button>            
                </CardActions>
            </Card>
        </article>
    )
}

export default Item
