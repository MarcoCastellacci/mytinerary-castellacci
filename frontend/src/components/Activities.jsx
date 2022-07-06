import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Activity(props) {
    return (
        <Card sx={{ width:'80vw', marginLeft:'2.5rem', marginY:'2rem', bgcolor:'rgba(255, 255, 255, 0.306)', color:'whitesmoke', }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.activities.image}
                    alt="picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.activities.name}
                    </Typography>
                    <Typography variant="body2">
                        {props.activities.info}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
