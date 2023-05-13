import axios from 'axios';
import { Notify } from 'notiflix';

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
