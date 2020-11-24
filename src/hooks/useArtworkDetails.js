import React from 'react';

import api from '../service/rijks';

export default function useArtworkDetails(objectNumber) {
  const [content, setContent] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [found, setFound] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;

    api
      .fetchArtworkByNumber(objectNumber)
      .then((response) => {
        if (mounted) {
          setContent(response.artObject);
          setLoading(false);
          setFound(true);
        }
      })
      .catch(() => {
        if (mounted) {
          setLoading(false);
          setFound(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, [objectNumber]);

  return {
    loading,
    found,
    content,
  };
}
