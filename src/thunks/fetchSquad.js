import { fetchSquadSuccess } from '../actions/fetchSquadAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanSquad } from './cleaners/squadCleaner';

export const fetchSquad = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchSquadSuccess(cleanSquad(result.data)))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}