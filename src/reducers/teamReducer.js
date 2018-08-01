export const team = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_SUCCESS':
      return action.team
    default:
      return state
  }
}