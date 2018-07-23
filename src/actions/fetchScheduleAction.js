export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchScheduleSuccess = (schedule) => ({
  type: 'FETCH_SCHEDULE_SUCCESS',
  schedule
})