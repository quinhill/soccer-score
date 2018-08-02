import { player } from '../playerReducer';

describe('playerReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = player(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a player object', () => {
    const expected = { data: 'playerData' };
    const action = {
      type: 'FETCH_PLAYER_SUCCESS',
      player: { data: 'playerData' }
    }

    const result = player(undefined, action)

    expect(result).toEqual(expected);
  })
})