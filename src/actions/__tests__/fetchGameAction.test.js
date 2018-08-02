import * as action from '../fetchGameAction';

describe('fetchGameAction', () => {

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
      const game = {id: 'game'}

      const expected = {
        type: 'FETCH_GAME_SUCCESS',
        game
      }

      const result = action.fetchGameSuccess(game);

      expect(result).toEqual(expected);
    })
  })
})