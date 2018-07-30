import * as action from '../actions/fetchTeamAction';
import { cleanTeam } from './cleaners/teamCleaner';

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
      .then(team => dispatch(action.fetchTeamSuccess(cleanTeam(team.data))))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}