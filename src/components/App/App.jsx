import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { getArtistByName } from 'services/api';
import ArtistInfo from 'components/ArtistInfo/ArtistInfo';
import ArtistsList from 'components/ArtistsList/ArtistsList';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import LastReleases from 'components/LastReleases/LastReleases';
import NearestReleases from 'components/NearestReleases/NearestReleases';
import SearchForm from 'components/SearchForm/SearchForm';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [query, setQuery] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query.toLowerCase() !== this.state.query.toLowerCase()) {
  //     this.getArtist();
  //   }
  // }

  useEffect(() => {
    if (query) {
      const getArtist = async () => {
        try {
          const { artists } = await getArtistByName(query);
          setArtists([...artists]);
        } catch (error) {
          Notify.failure(error.message);
        }
      };

      getArtist();
    }
  }, [query]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setShowDetails(false);
  };

  const handleClick = artist => {
    setSelectedArtist(artist);
    setShowDetails(true);
  };

  return (
    <>
      <Header />
      <main>
        <NearestReleases />
        <section>
          <SearchForm onSubmit={handleSubmit} />
          <h1>Music cillection</h1>
          {showDetails ? (
            <div>
              <h2>{selectedArtist.name}</h2>
              <ArtistInfo artist={selectedArtist} />
              <div></div>
            </div>
          ) : (
            <ArtistsList
              artists={artists}
              query={query}
              onClick={handleClick}
            />
          )}
        </section>

        <LastReleases />
      </main>
      <Footer />
    </>
  );
};
export default App;
