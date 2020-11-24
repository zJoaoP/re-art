import React from 'react';

import useSearchResults from '../hooks/useSearchResults';

import ContentGrid from '../components/ContentGrid/ContentGrid';
import Spinner from '../components/Spinner/Spinner';
import Header from '../components/Header/Header';

// TODO: Handle empty response from museum.
export default function Search() {
  const { loading, content } = useSearchResults();

  return (
    <div id="search-wrapper">
      <Header />
      {loading ? <Spinner /> : <ContentGrid content={content} />}
    </div>
  );
}
