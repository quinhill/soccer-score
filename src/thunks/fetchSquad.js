import { fetchSquadSuccess } from '../actions/fetchSquadAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanSquad } from './cleaners/squadCleaner';

export const fetchSquad = (url) => {
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
      .then(squad => dispatch(fetchSquadSuccess(cleanSquad(squad.data))))
      .catch(() => dispatch(hasErrored(true)))
  }
}