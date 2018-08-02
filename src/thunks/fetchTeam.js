import { fetchTeamSuccess } from '../actions/fetchTeamAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from '../actions/hasErroredAction';
import { cleanTeam } from './cleaners/teamCleaner';

export const fetchTeam = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchTeamSuccess(cleanTeam(result.data)))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}