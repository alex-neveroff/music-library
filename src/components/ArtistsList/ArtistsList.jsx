import React from 'react';

const ArtistsList = ({ artists, query, onClick }) => {
  return (
    <ul>
      {artists
        .filter(artist =>
          artist.name.toLowerCase().includes(query.toLowerCase())
        )
        .map(artist => (
          <li key={artist.id}>
            <a
              href="./"
              onClick={event => {
                event.preventDefault();
                onClick(artist);
              }}
            >
              {artist.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ArtistsList;
