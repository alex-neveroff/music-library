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
