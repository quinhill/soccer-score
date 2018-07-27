import * as action from '../../actions/fetchLiveActions/fetchLiveASAction';
import { cleanLive } from '../cleaners/liveCleaner';

export const fetchLiveAS = (url) => {
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
      .then(liveAS => dispatch(action.fetchLiveASSuccess(liveAS)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}