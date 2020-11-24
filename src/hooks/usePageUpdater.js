import React from 'react';

import { useDispatch } from 'react-redux';
import searchActions from '../actions/searchActions';
import useScroll from './useScroll';

export default function usePageUpdater({ loading }) {
  const dispatch = useDispatch();
  const scroll = useScroll();

  React.useEffect(() => {
    if (scroll && !loading) dispatch(searchActions.nextPage());
    return () => {};
  }, [scroll]);

  return scroll;
}
