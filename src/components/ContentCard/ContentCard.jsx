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

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { useDispatch } from 'react-redux';

import favoriteActions from 'actions/favoritesActions';
import useFavorites from 'hooks/useFavorites';

import NoImage from 'assets/images/no_image.jpg';

import useStyles from 'components/ContentCard/style';

export default function ContentCard({ id, title, subtitle, url, imageUrl }) {
  const isFavorite = useFavorites(id);
  const dispatch = useDispatch();
  const classes = useStyles();

  const hasImage = imageUrl !== undefined;

  const favoriteIcon = isFavorite ? (
    <FavoriteIcon className={classes.favorite} />
  ) : (
    <FavoriteBorderIcon className={classes.favorite} />
  );

  function handleFavoriteClick() {
    if (isFavorite) {
      dispatch(
        favoriteActions.removeFavorite({ id, title, subtitle, url, imageUrl })
      );
    } else {
      dispatch(
        favoriteActions.addFavorite({ id, title, subtitle, url, imageUrl })
      );
    }
  }

  function handleShareClick() {
    navigator.clipboard.writeText(`localhost:3000${url}`);
  }

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
          <IconButton onClick={handleFavoriteClick}>{favoriteIcon}</IconButton>
          <IconButton onClick={handleShareClick}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Grid>
    </Grid>
  );
}

ContentCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

ContentCard.defaultProps = {
  imageUrl: undefined,
};
