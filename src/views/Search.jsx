import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ContentGrid from '../components/ContentGrid/ContentGrid';
import Spinner from '../components/Spinner/Spinner';
import Header from '../components/Header/Header';
import api from '../service/rijks';

// TODO: Handle empty response from museum.
export default function Search() {
  const { searchTerm } = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);

  if (searchTerm === '') {
    const history = useHistory();
    history.push('/');
  }

  async function fetchSearchTerm() {
    setLoading(true);
    api.fetchSearchTerm(searchTerm).then((response) => {
      setContent(response.artObjects);
      setLoading(false);
    });
    return 0;
  }

  React.useEffect(() => {
    fetchSearchTerm();
    return () => {};
  }, [searchTerm]);

  return (
    <div id="search-wrapper">
      <Header />
      {loading ? <Spinner /> : <ContentGrid content={content} />}
    </div>
  );
}
