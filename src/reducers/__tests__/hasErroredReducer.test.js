import { hasErrored } from '../hasErroredReducer';

describe('hasErroredReducer', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = hasErrored(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a boolean', () => {
    const expected = true
    const action = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }

    const result = game(undefined, action)

    expect(result).toEqual(expected);
  })
})