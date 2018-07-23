import * as action from '../fetchScheduleAction';

describe('fetchScheduleAction', () => {

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

  describe('fetchScheduleSuccess', () => {

    it('should return a type of FETCH_TEAM_SUCCESS with a team object', () => {
      const schedule = [{id: 'game1'}, {id: 'game2'}]

      const expected = {
        type: 'FETCH_SCHEDULE_SUCCESS',
        schedule
      }

      const result = action.fetchScheduleSuccess(schedule);

      expect(result).toEqual(expected);
    })
  })
})