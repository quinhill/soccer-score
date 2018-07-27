import * as action from '../../actions/fetchLiveActions/fetchLiveAMAction';
import { cleanLive } from '../cleaners/liveCleaner';

export const fetchLiveAM = (url) => {
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
        return response.json()})
      .then(liveAM => dispatch(action.fetchLiveAMSuccess(liveAM)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}