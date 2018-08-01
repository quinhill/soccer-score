import React from 'react';
import { Team } from './Team';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './Team';

describe('Team', () => {
  it('should match snapshot', () => {
    const mockSquad = [{}, {}];
    const mockTeam = {};
    const mockFetchPlayer = jest.fn();
    const mockSetDisplay = jest.fn();
    const wrapper = shallow(<Team
      squad={mockSquad}
      team={mockTeam}
      fetchPlayer={mockFetchPlayer}
      setDisplay={mockSetDisplay}
      />);
    
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const initialState = {
        player: {id: 'some player'},
        squad: [{}, {}],
        team: {id: 'some string'}
      }
      const expected = {
        squad: [{}, {}],
        team: {id: 'some string'}
      }
  
      const result = mapStateToProps(initialState);
  
      expect(result).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should dispatch a fetchPlayer action when fetchPlayer is called', () => {
      const mockDispatch = jest.fn()
      const url = 'http://somestring.com';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPlayer(url)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('should dispatch a setDisplay action when setDisplay is called', () => {
      const mockDispatch = jest.fn()
      const clicked = 'player';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setDisplay(clicked)

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})