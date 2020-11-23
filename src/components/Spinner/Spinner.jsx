import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <CircularProgress
      style={{ display: 'block', top: '50%', right: '50%', position: 'fixed' }}
    />
  );
}
