import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getNearestRealeases } from 'services/api';
import NearestReleases from 'components/NearestReleases/NearestReleases';

const Home = () => {
  const [releases, setReleases] = useState([]);
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
    <div>{releases.length > 0 && <NearestReleases releases={releases} />}</div>
  );
};

export default Home;
