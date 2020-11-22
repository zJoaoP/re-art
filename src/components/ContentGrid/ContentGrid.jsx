import React from 'react';
import { useSelector } from 'react-redux';

import api from '../../service/rijks';

export default function ContentGrid() {
  const { searchTerm } = useSelector((state) => state.header);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      api
        .fetchSearchTerm(searchTerm)
        .then((response) => response.json())
        .then((response) => setContent(response));

      setLoading(false);
    }
    return () => {};
  }, [searchTerm]);

  console.log(content);
  console.log(loading);

  return (
    <div name="content-grid">
      <h1>E</h1>
    </div>
  );
}
