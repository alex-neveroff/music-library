import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getNearestRealeases } from 'services/api';
import { NearestAlbums } from './NearestReleases.styled';

const NearestReleases = () => {
  const [releases, setReleases] = useState([]);
  console.log('releases', releases);

  useEffect(() => {
    const getRealeases = async () => {
      try {
        const releasesInfo = await getNearestRealeases();
        setReleases(releasesInfo['release-groups']);
      } catch (error) {
        Notify.failure(error.message);
      }
    };
    getRealeases();
  }, []);

  return (
    <NearestAlbums>
      <h2 className="pageTitle">Nearest Releases of power metal</h2>
      <ul className="homeList">
        {releases
          .filter(release => release['first-release-date'].includes('-'))
          .map(release => {
            const genres = release.tags
              .filter(tag => tag.name !== 'metal' && tag.name !== 'rock')
              .map(tag => tag.name);
            return (
              <li className="homeList-item" key={release.id}>
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
