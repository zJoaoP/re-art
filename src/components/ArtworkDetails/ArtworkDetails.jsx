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

  if (!found) return <h1>Not Found</h1>;
  if (loading) return <Spinner />;

  return (
    <Paper square>
      <Grid item xs container className={classes.container}>
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

        <Grid item xs={12}>
          <img
            className={classes.image}
            src={content.webImage.url}
            alt={content.title}
          />
          <Typography variant="body2" align="center" gutterBottom>
            {content.label.makerLine}
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
