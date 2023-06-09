import { Notify } from 'notiflix';
import axios from 'axios';

export const getArtistName = async query => {
  try {
    const { data } = await axios.get(
      `http://musicbrainz.org/ws/2/artist/?query=artist:${query}%20AND%20tag:metal&fmt=json`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const getArtistDetails = async artistId => {
  try {
    const { data } = await axios.get(
      `http://musicbrainz.org/ws/2/artist/${artistId}?inc=genres+release-groups&fmt=json`
    );
    console.log(data);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const getNearestRealeases = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const today = `${year}-${month}-${day}`;

  try {
    const { data } = await axios.get(
      `http://musicbrainz.org/ws/2/release-group/?query=tag:("power metal"+OR+"heavy metal")%20AND%20primarytype:album%20AND%20firstreleasedate:[${today} TO *]&fmt=json`
    );
    console.log('api: ', data);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
