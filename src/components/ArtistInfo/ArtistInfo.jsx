import React from 'react';

const ArtistInfo = ({ artist }) => {
  const { name } = artist;
  const {
    'life-span': { begin, ended },
  } = artist;
  const { name: country } = artist.area;
  const genre = artist.genres.reduce((prev, current) => {
    return prev.count > current.count ? prev : current;
  });

  return (
    <div>
      <h3>Artist info</h3>
      <p>{name}</p>
      <p>{country}</p>
      <p>{begin ? begin : 'No date'}</p>
      <p>{ended ? ended : begin ? 'Present days' : 'No date'}</p>
      <p>{genre.name}</p>
    </div>
  );
};

export default ArtistInfo;
