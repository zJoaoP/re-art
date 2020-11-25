import React from 'react';

import favorites from '../helpers/favorites';

export default function useFavorites(id) {
  const [isFavorite, setFavorite] = React.useState(favorites.has(id));

  React.useEffect(() => {
    setFavorite(favorites.has(id));
    return () => {};
  }, [favorites.has(id)]);

  function changeState({ title, subtitle, url, imageUrl }) {
    if (isFavorite) favorites.remove(id);
    else favorites.add(id, { id, title, subtitle, url, imageUrl });

    setFavorite(!isFavorite);
  }
  return { isFavorite, changeState };
}
