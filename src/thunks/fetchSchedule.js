import * as action from '../actions/fetchScheduleAction';

export const fetchSchedule = (url) => {
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
    .then(response => response.json())
    .then(schedule => dispatch(action.fetchScheduleSuccess(schedule.sport_events)))
    .catch(() => dispatch(action.hasErrored(true)))
  }
}