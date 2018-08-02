import { setDisplay } from '../setDisplayAction';

describe('setDisplayAction', () => {

  describe('setDisplay', () => {

    it('should return a type of SET_DISPLAY with a team object', () => {
      const clicked = 'team'

      const expected = {
        type: 'SET_DISPLAY',
        clicked
      }

      const result = setDisplay(clicked);

      expect(result).toEqual(expected);
    })
  })
})