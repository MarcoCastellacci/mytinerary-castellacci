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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState} from 'react';
import axios from 'axios';



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
    const [itinerary,setItinerary] = useState()

useEffect(() => {
    axios.get(`https://62a395985bd3609cee6cceb8.mockapi.io/api/Itinerarys`)
    .then(response => setItinerary(response.data.data))
// let itineraryFilter = itinerary.filter(itinerary => itinerary._id === props._id);
//     setItinerary(itineraryFilter)
    }) 

console.log(itinerary)
const handleExpandClick = () => {
    setExpanded(!expanded);
};
console.log(props)
return (
    <Card sx={{ width: '90vw', bgcolor: 'transparent' }}>
    {itinerary && 
    <>
    <CardHeader
    avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {itinerary.imageUser}
        </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title={itinerary.name}
        subheader="September 14, 2016"
        />
        <CardMedia
        component="img"
        height="194"
        image={itinerary.image}
        alt='itinerary'
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {itinerary.nameUser}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Description</Typography>
                <Typography paragraph>
                {itinerary.info}
                </Typography>
            </CardContent>
        </Collapse>
    </>
    }
    </Card>
);
}
