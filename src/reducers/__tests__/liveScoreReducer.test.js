import { liveScores } from '../liveScoresReducer';

describe('liveScoresReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = game(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a game object', () => {
    const expected = { data: 'gameData' };
    const action = {
      type: 'FETCH_GAME_SUCCESS',
      game: { data: 'gameData' }
    }

    const result = game(undefined, action)

    expect(result).toEqual(expected);
  })
})