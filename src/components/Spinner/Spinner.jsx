import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <CircularProgress
      style={{
        position: 'absolute',
        height: '50px',
        width: '50px',
        top: '50%',
        left: '50%',
        marginLeft: '-25px',
        marginTop: '-25px',
      }}
    />
  );
}
