import { fetchPlayerSuccess } from '../actions/fetchPlayerAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanPlayer } from './cleaners/playerCleaner';

export const fetchPlayer = (url) => {
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
      .then(player => dispatch(fetchPlayerSuccess(cleanPlayer(player.data))))
      .catch(() => dispatch(hasErrored(true)))
  }
}