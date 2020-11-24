import React from 'react';

import api from '../service/rijks';

export default function useArtworkDetails(objectNumber) {
  const [content, setContent] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [found, setFound] = React.useState(true);

  React.useEffect(() => {
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
    return () => {};
  }, [objectNumber]);

  return {
    loading,
    found,
    content,
  };
}
