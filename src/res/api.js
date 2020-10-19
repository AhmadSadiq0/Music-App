import { API_KEY, COUNTRY } from './strings';
export const API_TO_FETCH_TOP_TRACKS = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=' + COUNTRY + '&api_key=' + API_KEY + '&format=json';

