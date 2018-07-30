import * as action from '../actions/fetchGameAction';
import { cleanGame } from './cleaners/gameCleaner';

export const fetchGame = (url) => {
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
      .then(game => dispatch(action.fetchGameSuccess(cleanGame(game.data))))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}