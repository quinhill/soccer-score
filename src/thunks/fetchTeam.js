import { fetchTeamSuccess } from '../actions/fetchTeamAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanTeam } from './cleaners/teamCleaner';

export const fetchTeam = (url) => {
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
      .then(response => response.json())
      .then(team => dispatch(fetchTeamSuccess(cleanTeam(team.data))))
      .catch(() => dispatch(hasErrored(true)))
  }
}