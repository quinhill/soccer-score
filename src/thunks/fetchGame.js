import { fetchGameSuccess } from '../actions/fetchGameAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from  '../actions/hasErroredAction';
import { cleanGame } from './cleaners/gameCleaner';

export const fetchGame = (url) => {
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
      .then(game => dispatch(fetchGameSuccess(cleanGame(game.data))))
      .catch(() => dispatch(hasErrored(true)))
  }
}