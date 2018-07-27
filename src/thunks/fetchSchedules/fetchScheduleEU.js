import * as action from '../../actions/fetchScheduleActions/fetchScheduleEUActions';

export const fetchScheduleEU = (url) => {
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
      .then(scheduleEU => dispatch(action.fetchScheduleEUSuccess(scheduleEU.sport_events)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}