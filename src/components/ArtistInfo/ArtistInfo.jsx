import React from 'react';
import { ArtistInfoStyled } from './ArtistInfo.styled';

const ArtistInfo = ({ artist }) => {
  const {
    'life-span': { begin, ended },
  } = artist;
  if (artist.genres) {
  }
  const genre =
    artist.genres.length > 0
      ? artist.genres.reduce((prev, current) => {
          if (current.name === 'rock' || current.name === 'metal') {
            return prev;
          }
          return prev.count > current.count ? prev : current;
        })
      : 'Genre unknown';
  const releases = artist['release-groups']
    ? artist['release-groups'].filter(
        release => release['secondary-types'].length === 0
      )
    : [];

  return (
    <>
      <h2 className="page-title">{artist.name}</h2>
      <ArtistInfoStyled>
        <div className="artist-info">
          <h3 className="artist-subtitle">Artist info</h3>
          {artist.name && <p className="artist-discr">Name: {artist.name}</p>}
          {artist.area ? (
            <p className="artist-discr">Country: {artist.area.name}</p>
          ) : (
            'Country unknown'
          )}
          <p className="artist-discr">
            Years: {begin ? begin : 'No date'}
            {ended ? `- ${ended}` : begin ? ' - present days' : ''}
          </p>
          {genre && <p className="artist-discr">Genre: {genre.name}</p>}
        </div>
        <div className="artist-albums">
          <h3 className="artist-subtitle">Artist discography</h3>
          {releases.length > 0 ? (
            <ul className="albums-list">
              {releases.map(release => {
                const cover = `http://coverartarchive.org/release-group/${release.id}/front-250`;
                return (
                  <li className="album-item" key={release.id}>
                    <img
                      className="album-cover"
                      src={cover}
                      alt={release.title}
                      width="250"
                    />
                    <p className="artist-discr">{release.title}</p>
                    <p className="artist-discr">
                      {release['first-release-date']}
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="artist-discr">No discography yet</p>
          )}
        </div>
      </ArtistInfoStyled>
    </>
  );
};

export default ArtistInfo;
