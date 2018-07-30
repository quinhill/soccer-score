import * as action from '../actions/fetchLeagueAction';

export const fetchLeague = (url) => {
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
      .then(league => dispatch(action.fetchLeagueSuccess(league.data.name)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}