import React from 'react';
import { FullGame } from './FullGame';
import { shallow } from 'enzyme';
import { mapStateToProps } from './FullGame';


describe('FullGame', () => {

  describe('mapStateToProps', () => {

    let initialState;
    let wrapper;

    beforeEach(() => {
      initialState = {
        game: {id: 'game'}
      }
      wrapper = shallow(<FullGame
        props={initialState}
      />)
    })

    it('should return a props object', () => {
      const expected = {
        game: {id: 'game'}
      }

      const result = mapStateToProps(initialState)

      expect(result).toEqual(expected);
    })
  })
})