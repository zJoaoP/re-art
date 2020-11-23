import React from 'react';

import { useParams } from 'react-router-dom';

import Spinner from '../components/Spinner/Spinner';
import Header from '../components/Header/Header';

import api from '../service/rijks';

export default function Artwork() {
  const [content, setContent] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  const [found, setFound] = React.useState(false);

  const { objectNumber } = useParams();

  async function fetchArtworkByNumber() {
    setLoading(true);
    api.fetchArtworkByNumber(objectNumber).then((response) => {
      setContent(response.artObject);
      setLoading(false);
      setFound(true);
    });
  }

  React.useEffect(() => {
    fetchArtworkByNumber();
    return () => {};
  }, [objectNumber]);

  console.log(loading);
  console.log(content);

  function ArtworkContent() {
    if (!found) return <h1>NotFound</h1>;
    if (loading) return <Spinner />;
    return <h1 style={{ color: '#FF00FF' }}>{objectNumber}</h1>;
  }

  return (
    <div id={`artwork-${objectNumber}`}>
      <Header />
      <ArtworkContent />
    </div>
  );
}
