import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ContentGrid from '../components/ContentGrid/ContentGrid';
import Header from '../components/Header/Header';
import api from '../service/rijks';

function Loading() {
  return (
    <CircularProgress
      style={{ display: 'block', top: '50%', right: '50%', position: 'fixed' }}
    />
  );
}

// TODO: Handle empty response from museum.
export default function Search() {
  const { searchTerm } = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);

  if (searchTerm === '') {
    const history = useHistory();
    history.push('/');
  }

  React.useEffect(() => {
    setLoading(true);
    api
      .fetchSearchTerm(searchTerm)
      .then((response) => response.json())
      .then((response) => {
        setContent(response.artObjects);
        setLoading(false);
      });
    return () => {};
  }, [searchTerm]);

  return (
    <div id="search-wrapper">
      <Header />
      {loading ? <Loading /> : <ContentGrid content={content} />}
    </div>
  );
}
