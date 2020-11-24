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

export default function ContentCard({ title, subtitle, url, imageUrl }) {
  const classes = useStyles();
  const hasImage = imageUrl !== undefined;
  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs component={Card} className={classes.card}>
        <CardHeader
          title={title}
          subheader={subtitle}
          subheaderTypographyProps={{ color: 'secondary' }}
        />
        <CardActionArea>
          <Link to={url}>
            <CardMedia
              className={classes.media}
              image={hasImage ? imageUrl : NoImage}
              title={title}
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
// title, subtitle, url, image
ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

ContentCard.defaultProps = {
  imageUrl: undefined,
};
