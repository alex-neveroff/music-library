import ArtistInfo from 'components/ArtistInfo/ArtistInfo';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistDetails } from 'services/api';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const getArtist = async () => {
      try {
        const artistInfo = await getArtistDetails(artistId);
        setArtist(artistInfo);
      } catch (error) {
        Notify.failure(error.message);
      }
    };
    getArtist();
  }, [artistId]);

  return <>{artist && <ArtistInfo artist={artist} />}</>;
};

export default ArtistDetails;
