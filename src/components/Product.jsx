import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import RatingProduct from './RatingProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 230,
    margin: 5,
    marginBottom: 20,
  },
  media: {
    height: 200,
    width: 200,
    backgroundSize: 'contain',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Products({id, image_link, product_type, name, description, price, rating}) {

  const classes = useStyles();
  const [expandedId, setExpandedId] = useState(false);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? false : id);
  };

  return (
        <Card key={id} className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    E
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={product_type}
            />
            <CardMedia
                className={classes.media}
                image={image_link}
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="small">
                {price}€
                </Typography>
                <RatingProduct value={rating} />
            </CardContent>
            <CardActions className={classes.actions} disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedId === id,
                })}
                onClick={() => handleExpandClick(id)}
                aria-expanded={expandedId === id}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expandedId === id} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )}