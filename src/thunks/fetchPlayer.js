import * as action from '../actions/fetchPlayerAction';
import { cleanPlayer } from './cleaners/playerCleaner';

export const fetchPlayer = (url) => {
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
      .then(player => dispatch(action.fetchPlayerSuccess(cleanPlayer(player.data))))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}