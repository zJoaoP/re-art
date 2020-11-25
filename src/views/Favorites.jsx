import React from 'react';

import ContentGrid from '../components/ContentGrid/ContentGrid';
import Header from '../components/Header/Header';
import favorites from '../helpers/favorites';

export default function Artwork() {
  const [content, setContent] = React.useState(favorites.get());
  React.useEffect(() => {
    setContent(favorites.get());
    return () => {};
  }, [favorites.get()]);

  return (
    <div id="favoritos">
      <Header />
      <ContentGrid content={Object.values(content)} />
    </div>
  );
}
