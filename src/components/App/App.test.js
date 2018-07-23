import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import { fetchSchedule } from '../../thunks/fetchSchedule';


describe('App', () => {

  describe('mapStateToProps and mapDispatchToProps', () => {

    let initialState;
    let wrapper;
    let mockFetchSchedule;

    beforeEach(() => {
      mockFetchSchedule = jest.fn()
      initialState = {
        isLoading: false,
        hasErrored: false
      }
      wrapper = shallow(<App 
        fetchSchedule={mockFetchSchedule}
        props={initialState}
        />)
    })

    it('should return a props object', () => {
      
      
      const expected = {
        isLoading: false,
        hasErrored: false
      }

      const result = mapStateToProps(initialState)
      
      expect(result).toEqual(expected);
    })

    it('should call dispatch when using a function from MDTP', () => {
      const mockDispatch = jest.fn();
      const url = 'https://someString.com'
      const actionToDispatch = fetchSchedule(url);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchSchedule(url);
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})