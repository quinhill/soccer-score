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

export const scheduleEU = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SCHEDULE_EU_SUCCESS':
      return action.scheduleEU.map(game => ({...game, region: 'eu'}))
    default:
      return state
  }
}