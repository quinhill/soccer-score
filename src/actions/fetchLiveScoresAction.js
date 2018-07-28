export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const fetchLiveScoresSuccess = (liveScores) => ({
  type: 'FETCH_LIVE_SCORES_SUCCESS',
  liveScores
})