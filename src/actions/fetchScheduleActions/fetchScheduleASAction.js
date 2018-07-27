export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchScheduleASSuccess = (scheduleAS) => ({
  type: 'FETCH_SCHEDULE_AS_SUCCESS',
  scheduleAS
})