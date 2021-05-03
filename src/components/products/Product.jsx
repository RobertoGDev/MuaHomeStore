import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import InfoIcon from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ProductDetail from './ProductDetail';
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
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product({id, image_link, product_type, name, description, price, rating}) {

  const classes = useStyles();
  const [openId, setOpenId] = React.useState(false);

  const handleOpenCloseModal = (id) => {
    setOpenId(openId === id ? false : id);
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
                  className={classes.expand}
                  aria-label="More info"
                  onClick={() => handleOpenCloseModal(id)}
                >
                <InfoIcon />
                </IconButton>
            </CardActions>
            <ProductDetail
              status={openId === id}
              image_link={image_link}
              product_type={product_type}
              nameProduct={name}
              description={description}
              handleOpenCloseModal = {handleOpenCloseModal}
            ></ProductDetail>
        </Card>
    )}