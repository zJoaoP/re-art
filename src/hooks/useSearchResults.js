import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import api from '../service/rijks';
import usePageUpdater from './usePageUpdater';

import removeDuplicates from '../helpers/removeDuplicates';

export default function useSearchResults() {
  const { searchTerm, page } = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);

  usePageUpdater({ loading });

  if (searchTerm === '') {
    const history = useHistory();
    history.push('/');
  }

  React.useEffect(() => {
    setLoading(true);
    api.fetchSearchTerm(searchTerm, page).then((response) => {
      setContent(
        page > 1
          ? removeDuplicates([...content, ...response.artObjects])
          : removeDuplicates([...response.artObjects])
      );
      setLoading(false);
    });
    return () => {};
  }, [searchTerm, page]);

  return {
    loading,
    content,
  };
}
