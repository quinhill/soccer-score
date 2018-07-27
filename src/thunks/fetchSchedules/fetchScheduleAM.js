import * as action from '../../actions/fetchScheduleActions/fetchScheduleAMAction';

export const fetchScheduleAM = (url) => {
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
    .then(scheduleAM => dispatch(action.fetchScheduleAMSuccess(scheduleAM.sport_events)))
    .catch(() => dispatch(action.hasErrored(true)))
  }
}