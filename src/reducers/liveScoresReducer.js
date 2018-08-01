export const liveScores = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIVE_SCORES_SUCCESS':
      return action.liveScores
    default:
      return state
  }
}