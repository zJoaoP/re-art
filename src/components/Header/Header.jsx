import React from 'react';

import { Toolbar, AppBar, Button } from '@material-ui/core';

import {
  AppBarWrapper,
  ToolbarWrapper,
  Title,
  StyledFavoritesButton,
} from './style';
import SearchInput from '../SearchInput/SearchInput';

import HorizontalSpace from '../Space/HorizontalSpace';

function FavoritesButton() {
  return (
    <Button startIcon={<StyledFavoritesButton />} size="large">
      Favoritos
    </Button>
  );
}

export default function Header() {
  return (
    <AppBarWrapper>
      <AppBar position="sticky">
        <ToolbarWrapper>
          <Toolbar>
            <HorizontalSpace width="10%" />
            <Title variant="h6">Re-art</Title>
            <SearchInput />
            <HorizontalSpace flexGrow />
            <FavoritesButton />
            <HorizontalSpace width="10%" />
          </Toolbar>
        </ToolbarWrapper>
      </AppBar>
    </AppBarWrapper>
  );
}
