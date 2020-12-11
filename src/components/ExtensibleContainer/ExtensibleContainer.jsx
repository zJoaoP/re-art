import PropTypes from 'prop-types';
import React from 'react';

import {
  Paper,
  Grid,
  Typography,
  IconButton,
  Collapse,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import useStyles from 'components/ExtensibleContainer/style';

export default function ExtensibleContainer({ header, children }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Paper square elevation={0}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={6} style={{ marginLeft: '12px' }}>
          <Typography>
            <strong>{header}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ flexBasis: '0' }}>
          <IconButton
            onClick={handleExpandClick}
            className={clsx(classes.collapseButton, {
              [classes.expandedCollapseButton]: expanded,
            })}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={expanded}>{children}</Collapse>
        </Grid>
      </Grid>
    </Paper>
  );
}

ExtensibleContainer.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
