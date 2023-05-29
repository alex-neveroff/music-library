import React from 'react';
import { NearestAlbums } from './NearestReleases.styled';

const NearestReleases = ({ releases }) => {
  return (
    <NearestAlbums>
      <h2 className="pageTitle">Nearest Releases of power metal</h2>
      <ul className="homeList">
        {releases
          .filter(release => release['first-release-date'].includes('-'))
          .map(release => {
            const genres = release.tags
              .filter(tag => tag.name !== 'metal' && tag.name !== 'rock')
              .sort((a, b) => b.count - a.count)
              .slice(0, 2)
              .map(tag => tag.name);

            const cover = `http://coverartarchive.org/release-group/${release.id}/front-250`;
            return (
              <li className="homeList-item" key={release.id}>
                <img
                  className="album-cover"
                  src={cover}
                  alt={release.title}
                  width="250"
                />
                <h3 className="album-title">{release.title}</h3>
                <p className="album-data">{release['first-release-date']}</p>
                <p className="album-data">
                  {release['artist-credit'][0]['name']}
                </p>
                <p className="album-data">{genres.join(', ')}</p>
              </li>
            );
          })}
      </ul>
    </NearestAlbums>
  );
};

export default NearestReleases;
