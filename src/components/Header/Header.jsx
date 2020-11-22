import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import React from 'react';

import SearchInput from '../SearchInput/SearchInput';

export default function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Re-Art</Typography>
          <SearchInput />
          <Button>Favorites</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
