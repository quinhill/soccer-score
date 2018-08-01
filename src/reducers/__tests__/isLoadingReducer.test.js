import { isLoading } from '../isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = isLoading(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a boolean', () => {
    const expected = { data: 'gameData' };
    const action = {
      type: 'IS_LOADING',
      isLoading: false
    }

    const result = isLoading(undefined, action)

    expect(result).toEqual(expected);
  })
})