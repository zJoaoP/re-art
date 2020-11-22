import React from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import SearchInput from '../SearchInput/SearchInput';

import useStyles from './style';

export default function CentralSearchBar() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.wrapper}
    >
      <Typography variant="h1" className={classes.title}>
        Re-Art
      </Typography>
      <SearchInput className={classes.searchInput} />
    </Grid>
  );
}
