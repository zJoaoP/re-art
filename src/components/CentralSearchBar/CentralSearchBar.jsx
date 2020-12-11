import React from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import SearchInput from 'components/SearchInput/SearchInput';

import useStyles from 'components/SearchInput/style';

export default function CentralSearchBar() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.wrapper}
    >
      <Grid item>
        <Typography variant="h1" className={classes.title}>
          Re-Art
        </Typography>
      </Grid>
      <Grid item className={classes.searchInputWrapper}>
        <SearchInput />
      </Grid>
    </Grid>
  );
}
