import * as action from '../fetchTeamAction';

describe('fetchTeamAction', () => {

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

  describe('fetchTeamSuccess', () => {
    
    it('should return a type of FETCH_TEAM_SUCCESS with a team object', () => {
      const team = {
        name: 'Manchester City',
        country: 'England'
      }

      const expected = {
        type: 'FETCH_TEAM_SUCCESS',
        team
      }

      const result = action.fetchTeamSuccess(team);

      expect(result).toEqual(expected);
    })
  })
})