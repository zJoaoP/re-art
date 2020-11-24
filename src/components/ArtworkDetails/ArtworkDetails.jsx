import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ExtensibleContainer from '../ExtensibleContainer/ExtensibleContainer';
import Spinner from '../Spinner/Spinner';
import api from '../../service/rijks';
import useStyles from './style';

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
      <ExtensibleContainer header="Description">
        <Typography align="justify" className={classes.text}>
          {content.description}
        </Typography>
      </ExtensibleContainer>
      <ExtensibleContainer header="Technical Description">
        <Typography align="justify" className={classes.text}>
          {content.plaqueDescriptionEnglish}
        </Typography>
      </ExtensibleContainer>
      <ExtensibleContainer header="References">
        <ul>
          {content.documentation.map((document) => (
            <li key={document}>
              <Typography align="justify" className={classes.text}>
                {document}
              </Typography>
            </li>
          ))}
        </ul>
      </ExtensibleContainer>
    </Paper>
  );
}

ArtworkDetails.propTypes = {
  objectNumber: PropTypes.string.isRequired,
};
