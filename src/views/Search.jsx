import React from 'react';
import { useSelector } from 'react-redux';

import ContentGrid from '../components/ContentGrid/ContentGrid';
import Header from '../components/Header/Header';
import api from '../service/rijks';

// TODO: Handle empty response from museum.
export default function Search() {
  const [content, setContent] = React.useState([]);
  const { searchTerm } = useSelector((state) => state.search);

  React.useEffect(() => {
    api
      .fetchSearchTerm(searchTerm)
      .then((response) => response.json())
      .then((response) => setContent(response.artObjects));
    return () => {};
  }, [searchTerm]);

  return (
    <div id="search-wrapper">
      <Header />
      <ContentGrid content={content} />
    </div>
  );
}
