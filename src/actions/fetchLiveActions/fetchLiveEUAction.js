export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchLiveEUSuccess = (liveEU) => ({
  type: 'FETCH_LIVE_EU_SUCCESS',
  liveEU
})