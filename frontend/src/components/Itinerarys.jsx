import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';



const ExpandMore = styled((props) => {
const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

export default function Itinerarys(props) {
    const [expanded, setExpanded] = useState(false);
    const [likes, setLikes] = useState(props.itinerarys.likes);
    const [isClicked, setIsClicked] = useState(false);
    
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

let price = props.itinerarys.price.toFixed(2);   
if (price > 0 && price < 30) {
        price = '💵';
} else if (price > 30 && price < 60) {
        price = '💵💵';
} else if (price > 60 && price < 100) {
        price = '💵💵💵';
} else if (price > 100 && price < 150) {
        price = '💵💵💵💵';
} else if (price > 150) {
        price = '💵💵💵💵💵';
};

console.log(price)
    const handleClick = () => {
    if (isClicked) {
    setLikes(likes - 1);
    } else {
    setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
    };
    console.log(likes);
return (
    <Card sx={{ width: '90vw', bgcolor: 'rgba(0, 0, 0, 0.651)', color: 'white', margin: '2rem' }} >
        <CardHeader
            avatar={
        <Avatar alt={props.itinerarys.nameUser} src={props.itinerarys.imageUser} />
            }
        title={props.itinerarys.nameUser}
        />
        <CardMedia
        component="img"
        height="194"
        image={props.itinerarys.image}
        alt='itinerary'
        />
        <CardContent>
            <Typography variant="body1" color="white">
            {props.itinerarys.name}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
                <FavoriteIcon sx={{ color:'red'}} className="likes-counter" />
                <Typography variant="body2" color="white" sx={{margin: '1rem'}}>
                {likes}
                </Typography>
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: 'white' }}
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                {props.itinerarys.info}
                <Typography sx={{margin: '1rem', textAlign: 'center'}}>Activities</Typography>
                {props.itinerarys.activities.map(activity => (
                    <Typography paragraph>
                    {activity}
                    </Typography>
                ))}
                </Typography>
                <CardContent>
                    <Typography paragraph>
                        <span> Estimated time: {props.itinerarys.time} Min. </span>
                    </Typography>
                    <Typography paragraph>
                        <span> Price: {price} </span>
                    </Typography>
                    <Typography paragraph sx={{ margin: '2rem'}}>
                        {props.itinerarys.hashtags.map(hashtag => (
                            <span key={hashtag}>#{hashtag} </span>))}
                    </Typography>
                </CardContent>
            </CardContent>
        </Collapse>
    </Card>
);
}
