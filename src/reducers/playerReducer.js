export const player = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYER_SUCCESS':
      return action.player
    default:
      return state
  }
}