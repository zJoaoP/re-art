import PropTypes from 'prop-types';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import ContentCard from '../ContentCard/ContentCard';

export default function ContentGrid({ content }) {
  return (
    <Grid container alignItems="stretch">
      {content.map((artwork) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ContentCard key={artwork.id} artwork={artwork} />
        </Grid>
      ))}
    </Grid>
  );
}

ContentGrid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
