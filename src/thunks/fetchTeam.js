import * as action from '../actions/fetchTeamAction';

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
      .then(Team => dispatch(action.fetchTeamSuccess(Team)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}