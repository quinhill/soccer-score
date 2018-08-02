import { fetchGameSuccess } from '../actions/fetchGameAction';
import { isLoading } from '../actions/isLoadingAction';
import { hasErrored } from  '../actions/hasErroredAction';
import { cleanGame } from './cleaners/gameCleaner';

export const fetchGame = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        console.log(response)
        throw Error(response.statusText)
    }
    dispatch(isLoading(false))
    const result = await response.json()
    console.log(result)
    const cleanedGame = cleanGame(result.data)
    dispatch(fetchGameSuccess(cleanedGame))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}