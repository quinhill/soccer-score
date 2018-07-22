import { isLoading, hasErrored, fetchScheduleDataSuccess } from '../actions/fetchScheduleAction';

export const fetchSchedule = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        return response
    })
    .then(response => response.json())
    .then(schedule => dispatch(fetchScheduleDataSuccess(schedule.sport_events)))
    .catch(() => dispatch(hasErrored(true)))
  }
}