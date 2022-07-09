import * as React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SignOut from './SignOut';

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

export default function UserProfile(props) {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {props.user ?
                <Card sx={{ width: '70vw', bgcolor: 'rgba(0, 0, 0, 0.651)', marginY: '5rem', height: { xl: '30vw' }, }}>
                    <CardHeader sx={{ color: 'whiteSmoke' }}
                        avatar={
                            <Avatar sx={{ bgcolor: 'black', }} aria-label="recipe">
                                {props.user.name.charAt(0)}
                            </Avatar>
                        }
                        title={props.user.name}
                    />
                    <CardMedia
                        component="img"
                        height="500vh"
                        image={props.user.image}
                        alt="User Profile Picture"
                    />
                    <CardContent>
                        <Typography variant="body2" color="white">
                            This is my profil info.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <SignOut />
                        <ExpandMore
                            color="primary"
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography variant='h6' sx={{ color: 'whitesmoke' }}>My Likes</Typography>
                        <CardContent>
                            <Typography paragraph sx={{ color: 'whitesmoke' }}>
                                Here is gonna appear my likes collections.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                :
                <CardContent sx={{ height: '100vh' }}>
                    <Typography variant='h3' sx={{ color: 'whitesmoke', bgcolor: 'rgba(0, 0, 0, 0.651)', width: '80vw', textAlign: 'center', borderRadius: '20px', marginTop: '5rem' }}>
                        You need to sign in to see your profile.
                    </Typography>


                </CardContent>
            }

        </>
    );
}
