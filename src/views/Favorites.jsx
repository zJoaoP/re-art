import React from 'react';

import { useSelector } from 'react-redux';

import ContentGrid from 'components/ContentGrid/ContentGrid';
import Header from 'components/Header/Header';

export default function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div id="favoritos">
      <Header />
      <ContentGrid content={Object.values(favorites)} />
    </div>
  );
}
