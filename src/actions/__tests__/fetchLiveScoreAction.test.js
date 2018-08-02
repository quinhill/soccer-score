import * as action from '../fetchLiveScoresAction';

describe('fetchLiveScoresAction', () => {

  describe('isLoading', () => {

    it('should return a type of IS_LOADING with a boolean', () => {
      const bool = false;

      const expected = {
        type: 'IS_LOADING',
        isLoading: bool
      }

      const result = action.isLoading(bool);

      expect(result).toEqual(expected);
    })
  })

  describe('hasErrored', () => {

    it('should return a type of HAS_ERRORED with a boolean', () => {
      const bool = true;

      const expected = {
        type: 'HAS_ERRORED',
        hasErrored: bool
      }

      const result = action.hasErrored(bool);

      expect(result).toEqual(expected);
    })
  })

  describe('fetchLiveScoreSuccess', () => {

    it('should return a type of FETCH_LIVE_SCORES_SUCCESS with a team object', () => {
      const liveScores = [{}, {}]

      const expected = {
        type: 'FETCH_LIVE_SCORES_SUCCESS',
        liveScores
      }

      const result = action.fetchLiveScoresSuccess(liveScores);

      expect(result).toEqual(expected);
    })
  })
})