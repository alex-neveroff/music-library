import ArtistInfo from 'components/ArtistInfo/ArtistInfo';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getRelisesArtist } from 'services/api';

const ArtistDetails = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    const getArtist = async () => {
      try {
        const artistInfo = await getArtistById(artistId);
        setArtist(artistInfo);
      } catch (error) {
        Notify.failure(error.message);
      }
    };
    getArtist();
  }, [artistId]);

  useEffect(() => {
    const getReleases = async () => {
      try {
        const releasesInfo = await getRelisesArtist(artistId);
        console.log(releasesInfo);
        setReleases(releasesInfo);
      } catch (error) {
        Notify.failure(error.message);
      }
    };
    getReleases();
  }, [artistId]);

  return (
    <>
      {artist && <h2>{artist.name}</h2>}
      {artist && <ArtistInfo artist={artist} />}
    </>
  );
};

export default ArtistDetails;
