import { liveScores } from '../liveScoresReducer';

describe('liveScoresReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = liveScores(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a liveScores array', () => {
    const expected = [{ data: 'gameData' }, { data: 'gameData' }];
    const action = {
      type: 'FETCH_LIVE_SCORES_SUCCESS',
      liveScores: [{ data: 'gameData' }, { data: 'gameData' }]
    }

    const result = liveScores(undefined, action)

    expect(result).toEqual(expected);
  })
})