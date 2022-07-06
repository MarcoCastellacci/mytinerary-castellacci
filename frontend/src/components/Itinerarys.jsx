import React, {useEffect} from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';
import Activities from '../components/Activities';



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
    const [activities, setActivities] = useState(false);
const user = useSelector(store => store.userReducer.user);
const like = useSelector(store => store.itinerary.likes);
    const [likes, setLikes] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExpandClickActivities = () => {
        setActivities(!activities);
    };
    let price = props.itinerarys.price;
    if (price < 30) {
        price = '💵';
    } else if (price < 60) {
        price = '💵💵';
    } else if (price < 100) {
        price = '💵💵💵';
    } else if (price < 150) {
        price = '💵💵💵💵';
    } else if (price > 150) {
        price = '💵💵💵💵💵';
    };

    useEffect(() => {
        dispatch(itineraryActions.addLikes(user._id, like));
        // eslint-disable-next-line
    }, []);

function handleClick() {
    if (isClicked) {
        setLikes(likes - 1);
    } else {
        setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
};
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
        <CardContent sx={{ marginBottom: '0' }}>
            <Typography variant="h4" color="white" sx={{ textAlign: 'center' }}>
                {props.itinerarys.name}
            </Typography>
        </CardContent>
        <CardActions disableSpacing >
            <IconButton sx={{ margin: '1.5rem', marginY: '0' }} className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
                <FavoriteIcon sx={{ color: 'red' }} className="likes-counter" />
                <Typography variant="body2" color="white" sx={{ margin: '1rem' }}>
                    {like}
                </Typography>
            </IconButton>
            <Typography paragraph sx={{ alignItems: 'center', margin: '1.5rem', marginY: '0' }}>
                <span> Estimated time: {props.itinerarys.time} Min. </span>
            </Typography>
            <Typography paragraph sx={{ alignItems: 'center', margin: '1.5rem', marginY: '0' }}>
                <span> Price: {price} </span>
            </Typography>
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
                </Typography>
                <Typography paragraph sx={{ margin: '2rem' }}>
                    {props.itinerarys.hashtags.map((hashtag, index) => (
                        <span key={index}>#{hashtag} </span>))}
                </Typography>
                <CardContent>
                    <CardActions>
                        <Typography variant="h6" sx={{ margin: '1rem', marginBottom: '0', textAlign: 'center' }}>
                            Activities
                        </Typography>
                        <ExpandMore
                            expand={activities}
                            onClick={handleExpandClickActivities}
                            aria-expanded={activities}
                            aria-label="show more"
                            sx={{ color: 'white', textAlign: 'center' }}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                </CardContent>
            </CardContent>
        </Collapse>

        <Collapse in={activities} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.itinerarys.activities.map((activity, index) => 
                            <Activities activities={activity} key={index}/>
                        )}           
                    </Typography>
                </CardContent>
        </Collapse>
    </Card>
);
}
