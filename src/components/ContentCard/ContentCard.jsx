import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import NoImage from '../../assets/images/no_image.jpg';

import useStyles from './style';

export default function ContentCard({ artwork }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs component={Card} className={classes.card}>
        <CardHeader
          title={artwork.title}
          subheader={artwork.principalOrFirstMaker}
          subheaderTypographyProps={{ color: 'secondary' }}
        />
        <CardActionArea>
          <Link to={`/artwork/${artwork.id}`}>
            <CardMedia
              className={classes.media}
              image={artwork.hasImage ? artwork.webImage.url : NoImage}
              title={artwork.title}
              component="img"
            />
          </Link>
        </CardActionArea>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Grid>
    </Grid>
  );
}

ContentCard.propTypes = {
  artwork: PropTypes.objectOf(PropTypes.any).isRequired,
};
