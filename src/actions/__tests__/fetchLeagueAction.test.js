import * as action from '../fetchLeagueAction';

describe('fetchLeagueAction', () => {

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

  describe('fetchLeagueSuccess', () => {

    it('should return a type of FETCH_LEAGUE_SUCCESS with a team object', () => {
      const league = { id: 'League' }

      const expected = {
        type: 'FETCH_LEAGUE_SUCCESS',
        league
      }

      const result = action.fetchLeagueSuccess(league);

      expect(result).toEqual(expected);
    })
  })
})