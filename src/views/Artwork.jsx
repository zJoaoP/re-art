import React from 'react';

import { useParams } from 'react-router-dom';

export default function Artwork() {
  const { artworkID } = useParams();
  return (
    <div>
      <h1 style={{ color: '#FF00FF' }}>{artworkID}</h1>
    </div>
  );
}
