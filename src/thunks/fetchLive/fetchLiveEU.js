import * as action from '../../actions/fetchLiveActions/fetchLiveEUAction';
import { cleanLive } from '../cleaners/liveCleaner';

export const fetchLiveEU = (url) => {
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
        console.log(response.json())
        return response.json()
      })
      .then(liveEU => dispatch(action.fetchLiveEUSuccess(liveEU)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}