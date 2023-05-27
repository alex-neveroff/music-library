import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ArtistsList = ({ artists }) => {
  const location = useLocation();

  return (
    <ul>
      {artists.map(artist => (
        <li key={artist.id}>
          <Link to={`${artist.id}`} state={{ from: location }}>
            {artist.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
