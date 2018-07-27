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

export const scheduleAM = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SCHEDULE_AM_SUCCESS':
      return action.scheduleAM.map(game => ({ ...game, region: 'am' }))
    default:
      return state
  }
}