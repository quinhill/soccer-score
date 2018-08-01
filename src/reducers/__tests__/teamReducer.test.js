import { team } from '../teamReducer';

describe('teamReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = team(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return a state with a team object', () => {
    const expected = { data: 'teamData' };
    const action = {
      type: 'FETCH_SQUAD_SUCCESS',
      team: { data: 'teamData' }
    }

    const result = team(undefined, action)

    expect(result).toEqual(expected);
  })
})