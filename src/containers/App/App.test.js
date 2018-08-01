import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import { fetchLiveScores } from '../../thunks/fetchLiveScores';


describe('App', () => {

  describe('mapStateToProps and mapDispatchToProps', () => {

    let initialState;
    let wrapper;

    beforeEach(() => {
      initialState = {
        isLoading: false,
        hasErrored: false
      }
      wrapper = shallow(<App 
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

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchLiveScores(url);
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})