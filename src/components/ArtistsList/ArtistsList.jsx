import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArtistsListSyled } from './ArtistsList.styled';

const ArtistsList = ({ artists }) => {
  const location = useLocation();

  return (
    <ArtistsListSyled>
      {artists.map(artist => (
        <li className="artist-item" key={artist.id}>
          <Link to={`${artist.id}`} state={{ from: location }}>
            <p className="artist-info">
              {artist.name} ({artist.area ? artist.area.name : 'Unknown'})
            </p>
          </Link>
        </li>
      ))}
    </ArtistsListSyled>
  );
};

export default ArtistsList;
