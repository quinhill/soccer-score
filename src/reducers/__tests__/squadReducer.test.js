import { squad } from '../squadReducer';

describe('squadReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = squad(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return a state with a player object', () => {
    const expected = [{ data: 'playerData' }, { data: 'playerData' }];
    const action = {
      type: 'FETCH_SQUAD_SUCCESS',
      squad: [{ data: 'playerData' }, { data: 'playerData' }]
    }

    const result = squad(undefined, action)

    expect(result).toEqual(expected);
  })
})