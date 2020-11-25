import React from 'react';

import { useParams } from 'react-router-dom';

import ArtworkDetails from '../components/ArtworkDetails/ArtworkDetails';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Header from '../components/Header/Header';

export default function Artwork() {
  const { objectNumber } = useParams();

  return (
    <div id={`artwork-${objectNumber}`}>
      <Header />
      <Breadcrumbs title={objectNumber} />
      <ArtworkDetails objectNumber={objectNumber} />
    </div>
  );
}
