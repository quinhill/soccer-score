import { fetchLiveScoresSuccess } from '../actions/fetchLiveScoresAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';import { cleanLive } from './cleaners/liveCleaner';

export const fetchLiveScores = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        return response
      })
      .then(response => {
        return response.json()
      })
      .then(liveScores => dispatch(fetchLiveScoresSuccess(cleanLive(liveScores.data))))
      .catch(() => dispatch(hasErrored(true)))
  }
}