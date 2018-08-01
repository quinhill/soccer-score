import React from 'react';
import { shallow } from 'enzyme';
import { Player } from './Player';
import { mapStateToProps } from './Player';

describe('Player', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Player 
      player={{}}
    />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapPropsToState', () => {
    it('should return a props object containing a player object', () => {
      const mockState = {
        liveScores: [{}, {}],
        player: {},
        team: { id: 'teamId' }
      }
      const expected = {
        player: {}
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected);
    })
  })
})