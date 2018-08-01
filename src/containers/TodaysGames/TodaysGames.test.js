import React from 'react';
import { TodaysGames } from './TodaysGames';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './TodaysGames';

describe('TodaysGames', () => {

  describe('mapPropsToState', () => {
    
    it('should return a props object', () => {
      const mockState = {
        liveScores: [{}, {}],
        game: {},
        team: { id: 'teamId' },
        squad: [{}, {}],
        display: 'player',
        player: {}
      }
      const expected = {
        liveScores: [{}, {}],
        game: {},
        team: { id: 'teamId' },
        squad: [{}, {}],
        display: 'player',
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected);
    })
  })
  describe('mapDispatchToProps', () => {
    it('calls dispatch with a setDisplay action when setDisplay is called', () => {
      const mockDispatch = jest.fn()
      const clicked = 'team';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setDisplay(clicked)

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a fetchTeam action when fetchTeam is called', () => {
      const mockDispatch = jest.fn()
      const url = 'www.something.com';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchTeam(url)

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a fetchSquad action when fetchSquad is called', () => {
      const mockDispatch = jest.fn()
      const url = 'www.something.com';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchSquad(url)

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a fetchTeam action when fetchTeam is called', () => {
      const mockDispatch = jest.fn()
      const url = 'www.something.com';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchGame(url)

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})