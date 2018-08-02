import React from 'react';
import { FullGame } from './FullGame';
import { shallow } from 'enzyme';
import { mapStateToProps } from './FullGame';
import { mockFullGame } from '../../__mocks__/fullGameMocks';


describe('FullGame', () => {

  describe('mapStateToProps', () => {

    it('should return a props object', () => {
      const mockState = {
        game: mockFullGame,
        team: {id: 'teamId'}
      }
      const expected = {
        game: mockFullGame
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected);
    })
  })

  it('should match snapshot', () => {
    const mockProps = mockFullGame;
    const wrapper = shallow(<FullGame 
        game={{...mockProps}}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})