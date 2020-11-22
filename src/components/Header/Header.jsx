import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchInput from '../SearchInput/SearchInput';
import useStyle from './style';

function FavoritesButton() {
  const classes = useStyle();
  const favoriteIcon = <FavoriteIcon className={classes.favoriteIcon} />;
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return matches ? (
    <Button className={classes.favoritesButton} startIcon={favoriteIcon}>
      Favorites
    </Button>
  ) : (
    <IconButton>{favoriteIcon}</IconButton>
  );
}

export default function Header() {
  const classes = useStyle();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <div id="header">
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar} disableGutters>
          <Typography className={classes.title} noWrap>
            Re-Art
          </Typography>
          <SearchInput />
          {matches ? <div className={classes.space} /> : null}
          <FavoritesButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
