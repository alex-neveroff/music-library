import React from 'react';

const ArtistInfo = ({ artist }) => {
  const { name } = artist;
  const {
    'life-span': { begin, ended },
  } = artist;
  const { name: country } = artist.area;
  const genre = artist.genres.reduce((prev, current) => {
    if (current.name === 'rock' || current.name === 'metal') {
      return prev;
    }
    return prev.count > current.count ? prev : current;
  });
  const releases = artist['release-groups'].filter(
    release => release['secondary-types'].length === 0
  );

  return (
    <>
      <div>
        <h3>Artist info</h3>
        <p>{name}</p>
        <p>{country}</p>
        <p>{begin ? begin : 'No date'}</p>
        <p>{ended ? ended : begin ? 'Present days' : 'No date'}</p>
        <p>{genre.name}</p>
      </div>
      <div>
        <h3>Artist discography</h3>
        <ul>
          {releases.map(release => {
            return (
              <li key={release.id}>
                <p>{release['first-release-date']}</p>
                <p>{release.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ArtistInfo;
