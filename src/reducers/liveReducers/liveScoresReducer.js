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

export const liveScores = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIVE_SCORES_SUCCESS':
      return action.liveScores
    default:
      return state
  }
}