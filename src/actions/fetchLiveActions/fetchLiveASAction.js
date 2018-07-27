export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchLiveASSuccess = (liveAS) => ({
  type: 'FETCH_LIVE_AS_SUCCESS',
  liveAS
})