import * as action from '../../actions/fetchScheduleActions/fetchScheduleASAction';

export const fetchScheduleAS = (url) => {
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
      .then(scheduleAS => dispatch(action.fetchScheduleASSuccess(scheduleAS.sport_events)))
      .catch(() => dispatch(action.hasErrored(true)))
  }
}