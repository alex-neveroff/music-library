import LastReleases from 'components/LastReleases/LastReleases';
import NearestReleases from 'components/NearestReleases/NearestReleases';
import React from 'react';

const Home = () => {
  return (
    <div>
      <NearestReleases />
      <LastReleases />
    </div>
  );
};

export default Home;
