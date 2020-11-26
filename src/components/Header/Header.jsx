import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useHistory, Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchInput from '../SearchInput/SearchInput';
import useStyle from './style';

function FavoritesButton() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const history = useHistory();
  const classes = useStyle();

  function handleFavoritesClick() {
    history.push('/favorites');
  }

  return matches ? (
    <Button
      className={classes.favoritesButton}
      onClick={handleFavoritesClick}
      startIcon={<FavoriteIcon className={classes.favoriteIcon} />}
    >
      Favorites
    </Button>
  ) : (
    <IconButton onClick={handleFavoritesClick}>
      <FavoriteIcon className={classes.favoriteIcon} />
    </IconButton>
  );
}

export default function Header() {
  const classes = useStyle();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <div id="header">
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar} disableGutters>
          <Link
            color="inherit"
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Typography className={classes.title} noWrap>
              Re-Art
            </Typography>
          </Link>
          <SearchInput />
          {matches ? <div className={classes.space} /> : null}
          <FavoritesButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
