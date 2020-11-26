import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import api from '../service/rijks';
import usePageUpdater from './usePageUpdater';

import removeDuplicates from '../helpers/removeDuplicates';

export default function useSearchResults() {
  const { searchTerm } = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);
  const history = useHistory();

  const { page, setPage } = usePageUpdater({ loading, setLoading });

  if (searchTerm === '') history.push('/');

  React.useEffect(() => {
    setPage(1);
    return () => {};
  }, [searchTerm]);

  React.useEffect(() => {
    let mounted = true;

    setLoading(true);
    api.fetchSearchTerm(searchTerm, page).then((response) => {
      if (mounted) {
        setContent(
          page > 1
            ? removeDuplicates([...content, ...response.artObjects])
            : removeDuplicates(response.artObjects)
        );
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [page, searchTerm]);

  return {
    loading,
    content,
  };
}
