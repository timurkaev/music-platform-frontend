import { Dispatch } from 'redux';
import { TracksAction, TracksActionTypes } from '../../types/track';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch({
        type: TracksActionTypes.FETCH_TRACKS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: TracksActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Произошла ошибка при загрузке треков',
      });
    }
  };
};
