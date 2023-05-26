import { Notify } from 'notiflix';
import axios from 'axios';

export const getArtistByName = async query => {
  try {
    const { data } = await axios.get(
      `http://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const getArtistById = async artistId => {
  try {
    const { data } = await axios.get(
      `http://musicbrainz.org/ws/2/artist/${artistId}?inc=genres&fmt=json`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const getRelisesArtist = async artistId => {
  try {
    const { data } = await axios.get(
      `https://musicbrainz.org/ws/2/release-group?artist=${artistId}&type=album&fmt=json`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
