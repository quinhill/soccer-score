import { fetchLiveScoresSuccess } from '../actions/fetchLiveScoresAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanLive } from './cleaners/liveCleaner';

export const fetchLiveScores = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchLiveScoresSuccess(cleanLive(result.data)))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}