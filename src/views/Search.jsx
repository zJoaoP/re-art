import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';

export default function Search() {
  const { searchTerm } = useSelector((state) => state.header);
  console.log(searchTerm);
  return (
    <div id="search-wrapper">
      <Header />
    </div>
  );
}
