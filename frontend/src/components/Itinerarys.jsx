import React, { useEffect } from 'react';
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
import toast from 'react-hot-toast';
import commentsActions from '../redux/actions/commentsActions';
import '../styles/commentStyle.css'


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
    const [comments, setComments] = useState("");
    const [expComments, setExpComments] = useState(false);
    const user = useSelector(store => store.userReducer.user);
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const [modify, setModify] = useState(false);


    async function addComment(event) {
        const comment = {
            id: props.itinerarys._id,
            comment: comments,
        }
        const res = await dispatch(commentsActions.addComment(comment));
        setReload(!reload);
        console.log(res)
        alerts(res)

    }
    async function updateComment(event) {
        const commentData = {
            commentId: event.target.id,
            comment: modify
        }
        const res = await dispatch(commentsActions.modifyComment(commentData))
        setReload(!reload)
        alerts(res)
    }
    async function deleteComment(event) {
        const res = await dispatch(commentsActions.deleteComment(event.target.id))
        setReload(!reload)
        alerts(res)
    }

    //console.log(props.itinerarys.comments)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExpandClickActivities = () => {
        setActivities(!activities);
    };
    const handleExpandComments = () => {
        setExpComments(!expComments);
        setReload(!reload);
    }
    const expand = () => {
        handleExpandClickActivities();
        handleExpandComments()
    }
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
        dispatch(itineraryActions.getItineraryByCity(props.itinerarys.city));
        // eslint-disable-next-line
    }, [reload]);

    function alerts(res) {
        if (res === undefined) {
            toast.error("You must be logged in to comment or like an itinerary");
        }
        else if (res.data.success === true) {
            toast.success(res.data.message);
        }
    }

    async function likesDisLike() {
        const res = await dispatch(itineraryActions.addLikes(props.itinerarys._id));
        alerts(res);
        setReload(res);
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


                {
                    user ?
                        (<IconButton sx={{ margin: '.5rem', marginY: '0' }} onClick={likesDisLike}>
                            {props?.itinerarys.likes.includes(user.id) ?
                                <FavoriteIcon sx={{ color: 'red' }} className="likes-counter" />
                                : <FavoriteIcon sx={{ color: 'white' }} className="likes-counter" />}
                        </IconButton>)
                        :
                        (<IconButton sx={{ margin: '.5rem', marginY: '0' }} onClick={likesDisLike}>
                            <FavoriteIcon sx={{ color: 'white' }} className="likes-counter" />
                        </IconButton>)
                }
                <Typography variant="body2" color="white" sx={{ margin: '.5rem' }}>
                    {props?.itinerarys.likes.length}
                </Typography>




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
                                onClick={expand}
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
                        {props?.itinerarys?.activities.map((activity, index) =>
                            <Activities activities={activity} key={index} />
                        )}
                    </Typography>
                </CardContent>
                <CardContent>
                    <CardActions>
                        <Typography variant="h6" sx={{ margin: '1rem', marginBottom: '0', textAlign: 'center' }}>
                            Comments {props?.itinerarys.comments.length}
                        </Typography>
                        <ExpandMore
                            expand={expComments}
                            onClick={handleExpandComments}
                            aria-expanded={expComments}
                            aria-label="show more"
                            sx={{ color: 'white', textAlign: 'center' }}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                </CardContent>
            </Collapse>
            <Collapse in={expComments} timeout="auto" unmountOnExit>

                {user && props.itinerarys.comments.map((comment, index) =>
                    <>
                        <div key={index} className='comment-header'>
                            {user.id !== comment.user._id ?
                                <div className="comment-container">

                                    <div>
                                        <div className="comment-user">
                                            <Avatar alt={comment.user.name} src={comment.user.image} />
                                            <h3>{comment.user.name} {comment.user.lastName}</h3>
                                        </div>
                                        <div className='comment-header-right'>
                                            <h2>{comment.comment}</h2>
                                        </div>
                                    </div>

                                </div>
                                :
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                                    <div type="text" className="text-comment" onInput={(e) => setModify(e.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable>{comment.comment}</div>
                                    <div className='comment-button'>
                                        <button id={comment._id} onClick={updateComment} className="btn-comment">
                                            Modify
                                        </button>
                                        <button id={comment._id} onClick={deleteComment} className="btn-comment">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </>
                )}

                {user ?
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                    <div id="newComment" placeholder="Leave your Comment Here!" type="text" className="text-comment" onInput={(e) => setComments(e.currentTarget.textContent)}
                        suppressContentEditableWarning={true} contentEditable></div>
                    <div className='comment-button'>
                        <button onClick={addComment} className="btn-comment">
                            Send
                        </button>
                    </div>
                </div>
                :
                <div style={{ textAlign:'center', margin: '1rem'}}>
                    <h3>Please login to leave a comment</h3>
                </div>
                }

            </Collapse>
        </Card>
    );
}
