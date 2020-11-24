import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import api from '../service/rijks';

export default function useSearchResults() {
  const { searchTerm } = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);

  if (searchTerm === '') {
    const history = useHistory();
    history.push('/');
  }

  React.useEffect(() => {
    setLoading(true);
    api.fetchSearchTerm(searchTerm).then((response) => {
      setContent(response.artObjects);
      setLoading(false);
    });
    return () => {};
  }, [searchTerm]);

  return {
    loading,
    content,
  };
}
