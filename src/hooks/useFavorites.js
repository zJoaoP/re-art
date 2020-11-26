import React from 'react';

import { useSelector } from 'react-redux';

export default function useFavorites(id) {
  const [isFavorite, setFavorite] = React.useState(false);
  const { favorites } = useSelector((state) => state.favorites);

  React.useEffect(() => {
    setFavorite(favorites.filter((e) => e.id === id).length > 0);
    return () => {};
  }, [favorites]);

  return isFavorite;
}
