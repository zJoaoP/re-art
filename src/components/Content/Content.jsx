import React from 'react';
import { useSelector } from 'react-redux';

export default function Content() {
  const { searchTerm } = useSelector((state) => state.header);

  return (
    <div>
      <h1>{searchTerm}</h1>
    </div>
  );
}
