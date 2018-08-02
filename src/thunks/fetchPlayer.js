import { fetchPlayerSuccess } from '../actions/fetchPlayerAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanPlayer } from './cleaners/playerCleaner';

export const fetchPlayer = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchPlayerSuccess(cleanPlayer(result.data)))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}