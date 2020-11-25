import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useArtworkDetails from '../../hooks/useArtworkDetails';

import ExtensibleContainer from '../ExtensibleContainer/ExtensibleContainer';
import Spinner from '../Spinner/Spinner';
import useStyles from './style';

export default function ArtworkDetails({ objectNumber }) {
  const { loading, found, content } = useArtworkDetails(objectNumber);
  const classes = useStyles();

  if (!found) return null;
  if (loading) return <Spinner />;

  return (
    <Paper style={{ margin: '4px' }}>
      <Grid item xs container justify="center" className={classes.container}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            className={classes.title}
            gutterBottom
          >
            {content.title}
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={0}>
            <img
              className={classes.image}
              src={content.webImage.url}
              alt={content.title}
            />
            <Typography variant="body2" align="center" gutterBottom>
              {content.label.makerLine}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <ExtensibleContainer header="Detalhes">
            <Typography align="justify" className={classes.text}>
              {content.description}
            </Typography>
          </ExtensibleContainer>
          <ExtensibleContainer header="Detalhes Técnicos">
            <Typography align="justify" className={classes.text}>
              {content.plaqueDescriptionEnglish}
            </Typography>
          </ExtensibleContainer>
          <ExtensibleContainer header="Referências">
            <ul id="artwork-references">
              {content.documentation.map((document) => (
                <li key={document}>
                  <Typography align="justify" className={classes.text}>
                    {document}
                  </Typography>
                </li>
              ))}
            </ul>
          </ExtensibleContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}

ArtworkDetails.propTypes = {
  objectNumber: PropTypes.string.isRequired,
};
