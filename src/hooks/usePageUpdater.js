import React from 'react';

import useEndScroll from './useEndScroll';

export default function usePageUpdater({ loading }) {
  const [page, setPage] = React.useState(1);
  const scroll = useEndScroll();

  React.useEffect(() => {
    if (scroll && !loading) {
      setPage(page + 1);
    }
    return () => {};
  }, [scroll]);

  return { page, setPage };
}
