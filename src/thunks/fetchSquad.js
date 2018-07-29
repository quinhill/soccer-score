import * as action from '../actions/fetchSquadAction';
import { cleanSquad } from './cleaners/squadCleaner';

export const fetchTeam = (url) => {
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
      .then(response => response.json())
      .then(squad => dispatch(action.fetchSquadSuccess(cleanSquad(squad.data))))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}