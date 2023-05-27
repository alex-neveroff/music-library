import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getNearestRealeases } from 'services/api';

const NearestReleases = () => {
  const [genre, setGenre] = useState('power');

  useEffect(() => {
    const getRealeases = async () => {
      try {
        const realeasesInfo = await getNearestRealeases();
        setGenre(realeasesInfo);
      } catch (error) {
        Notify.failure(error.message);
      }
    };
    getRealeases();
  }, []);

  return (
    <section>
      <h2>Nearest Releases of power metal</h2>
      <ul></ul>
    </section>
  );
};

export default NearestReleases;
