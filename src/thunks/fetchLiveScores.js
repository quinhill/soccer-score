import * as action from '../actions/fetchLiveScoresAction';
import { cleanLive } from './cleaners/liveCleaner';

export const fetchLiveScores = (url) => {
  return (dispatch) => {
    dispatch(action.isLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(action.isLoading(false))
        return response
      })
      .then(response => {
        return response.json()
      })
      .then(liveScores => dispatch(action.fetchLiveScoresSuccess(liveScores.data)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}