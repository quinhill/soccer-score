export const game = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_GAME_SUCCESS':
      return action.game
    default:
      return state
  }
}