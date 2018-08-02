import { displayReducer } from '../displayReducer';

describe('displayReducer', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = displayReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with a string', () => {
    const expected = 'game';
    const action = { 
      type: 'SET_DISPLAY',
      clicked: 'game' 
    }

    const result = displayReducer(undefined, action)

    expect(result).toEqual(expected);
  })
})