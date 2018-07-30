export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const team = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_SUCCESS':
      return action.team
    default:
      return state
  }
}