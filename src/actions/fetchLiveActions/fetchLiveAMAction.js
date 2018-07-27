export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchLiveAMSuccess = (liveAM) => ({
  type: 'FETCH_LIVE_AM_SUCCESS',
  liveAM
})