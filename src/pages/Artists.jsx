import ArtistsList from 'components/ArtistsList/ArtistsList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getArtistName } from 'services/api';

const Artists = () => {
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (query) {
      const getArtist = async () => {
        try {
          const { artists } = await getArtistName(query);
          setArtists([...artists]);
        } catch (error) {
          Notify.failure(error.message);
        }
      };

      getArtist();
    }
  }, [query]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <ArtistsList artists={artists} />
    </>
  );
};

export default Artists;
