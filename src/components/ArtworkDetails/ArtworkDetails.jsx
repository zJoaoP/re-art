import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';

import Spinner from '../Spinner/Spinner';
import api from '../../service/rijks';
import useStyles from './style';

function TextCollapse({ header, children }) {
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const classes = useStyles();

  return (
    <Paper square>
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

TextCollapse.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default function ArtworkDetails({ objectNumber }) {
  const [content, setContent] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [found, setFound] = React.useState(true);

  const classes = useStyles();

  async function fetchArtworkByNumber() {
    // setLoading(true);
    api
      .fetchArtworkByNumber(objectNumber)
      .then((response) => {
        setContent(response.artObject);
        setLoading(false);
        setFound(true);
      })
      .catch(() => {
        setLoading(false);
        setFound(false);
      });
    return 0;
  }

  React.useEffect(() => {
    fetchArtworkByNumber();
    return () => {};
  }, [objectNumber]);

  if (!found) return <h1>Not Found</h1>;
  if (loading) return <Spinner />;

  return (
    <Paper className={classes.wrapper} square>
      <Typography variant="h5" align="center" gutterBottom>
        {content.title}
      </Typography>
      <img
        className={classes.image}
        src={content.webImage.url}
        alt={content.title}
      />
      <Typography variant="body2" align="center" gutterBottom>
        {content.label.makerLine}
      </Typography>
      <TextCollapse header="Description">
        <Typography align="justify" className={classes.text}>
          {content.description}
        </Typography>
      </TextCollapse>
      <TextCollapse header="Technical Description">
        <Typography align="justify" className={classes.text}>
          {content.plaqueDescriptionEnglish}
        </Typography>
      </TextCollapse>
      <TextCollapse header="References">
        <ul>
          {content.documentation.map((document) => (
            <li key={document}>
              <Typography align="justify" className={classes.text}>
                {document}
              </Typography>
            </li>
          ))}
        </ul>
      </TextCollapse>
    </Paper>
  );
}

ArtworkDetails.propTypes = {
  objectNumber: PropTypes.string.isRequired,
};
