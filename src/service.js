import { API_TO_FETCH_TOP_TRACKS } from './res/api';

export function getTopTracksFromServerLastFm(callback) {
    fetch(API_TO_FETCH_TOP_TRACKS)
        .then((response) => response.json())
        .then((responseJson) => {
            callback(true,responseJson) ;
        })
        .catch((error) => {
            callback(false,responseJson) ;
            console.error(error);
        });
}
