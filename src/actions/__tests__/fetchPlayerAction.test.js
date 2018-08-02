import * as action from '../fetchPlayerAction';

describe('fetchPlayerAction', () => {

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

  describe('fetchGameSuccess', () => {

    it('should return a type of FETCH_GAME_SUCCESS with a team object', () => {
      const player = { player: 'Sergio Aguero' }

      const expected = {
        type: 'FETCH_PLAYER_SUCCESS',
        player
      }

      const result = action.fetchPlayerSuccess(player);

      expect(result).toEqual(expected);
    })
  })
})