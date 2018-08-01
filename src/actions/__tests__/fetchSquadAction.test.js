import * as action from '../fetchSquadAction';

describe('fetchSquadAction', () => {

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

  describe('fetchSquadSuccess', () => {

    it('should return a type of FETCH_SQUAD_SUCCESS with a team object', () => {
      const squad = [{ id: 'player1' }, {id: 'player2'}]

      const expected = {
        type: 'FETCH_SQUAD_SUCCESS',
        squad
      }

      const result = action.fetchSquadSuccess(squad);

      expect(result).toEqual(expected);
    })
  })
})