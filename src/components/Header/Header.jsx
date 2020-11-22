import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import SearchInput from '../SearchInput/SearchInput';

export default function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>ASDAS</Typography>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </div>
  );
}
