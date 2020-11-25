import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Breadcrumbs as MaterialBreadcrumbs } from '@material-ui/core/';

import useStyles from './style';

export default function Breadcrumbs({ title }) {
  const classes = useStyles();
  return (
    <Paper square className={classes.wrapper}>
      <MaterialBreadcrumbs
        color="secondary"
        separator="›"
        className={classes.breadcrumbs}
      >
        <Link
          color="inherit"
          to="/search"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Resultados da Busca
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </MaterialBreadcrumbs>
    </Paper>
  );
}

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
};
