import ArtistInfo from 'components/ArtistInfo/ArtistInfo';
import ArtistsList from 'components/ArtistsList/ArtistsList';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import LastReleases from 'components/LastReleases/LastReleases';
import NearestReleases from 'components/NearestReleases/NearestReleases';
import SearchForm from 'components/SearchForm/SearchForm';
import { Notify } from 'notiflix';
import React, { Component } from 'react';
import { getArtistByName } from 'services/api';

export default class App extends Component {
  state = {
    artistsList: [],
    query: '',
    showDetails: false,
    selectedArtist: {},
    artistId: '',
    artistName: '',
    artistCountry: '',
    artistStart: '',
    artistEnd: '',
    artistGenre: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query.toLowerCase() !== this.state.query.toLowerCase()) {
      this.getArtist();
    }
  }

  getArtist = async () => {
    const { query } = this.state;

    try {
      const { artists } = await getArtistByName(query);

      this.setState({ artistsList: [...artists] });
      console.log(artists);
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  handleSubmit = query => {
    this.setState({ showDetails: false, query: query });
  };

  onClick = artist => {
    this.setState({
      selectedArtist: artist,
      showDetails: true,
    });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { artistsList, query, showDetails, selectedArtist } = this.state;

    return (
      <>
        <Header />
        <main>
          <NearestReleases />

          <section>
            <SearchForm onSubmit={this.handleSubmit} />

            <h1>Music cillection</h1>
            {showDetails ? (
              <div>
                <h2>{selectedArtist.name}</h2>
                <ArtistInfo artist={selectedArtist} />
                <div></div>
              </div>
            ) : (
              <ArtistsList
                artists={artistsList}
                query={query}
                onClick={this.onClick}
              />
            )}
          </section>

          <LastReleases />
        </main>
        <Footer />
      </>
    );
  }
}
