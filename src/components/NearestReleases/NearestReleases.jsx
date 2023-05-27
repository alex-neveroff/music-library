import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getNearestRealeases } from 'services/api';

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
    <section>
      <h2>Nearest Releases of power metal</h2>
      <ul>
        {releases
          .filter(release => release['first-release-date'].includes('-'))
          .map(release => {
            const genres = release.tags
              .filter(tag => tag.name !== 'metal' && tag.name !== 'rock')
              .map(tag => tag.name);
            return (
              <li key={release.id}>
                <p>{release['first-release-date']}</p>
                <p>{release.title}</p>
                <p>{release['artist-credit'][0]['name']}</p>
                <p>{genres.join(', ')}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default NearestReleases;
