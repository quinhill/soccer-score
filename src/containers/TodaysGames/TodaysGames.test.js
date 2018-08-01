import React from 'react';
import { TodaysGames } from './TodaysGames';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './TodaysGames';

describe('TodaysGames', () => {
  let mockFetchTeam;
  let mockFetchSquad;
  let mockFetchGame;
  let mockSetDisplay;
  let mockLiveScores;
  let mockTeam;
  let mockSquad;
  let mockGame;
  let mockDisplay;
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockFetchTeam = jest.fn();
    mockFetchSquad = jest.fn();
    mockFetchGame = jest.fn();
    mockSetDisplay = jest.fn();
    mockLiveScores = [{}, {}];
    mockTeam = {}
    mockSquad = [{}, {}];
    mockGame = {};
    mockDisplay = 'game';
    mockHistory = [];
    wrapper = shallow(<TodaysGames 
      fetchTeam={mockFetchTeam}
      fetchSquad={mockFetchSquad}
      fetchGame={mockFetchGame}
      setDisplay={mockSetDisplay}
      liveScores={mockLiveScores}
      team={mockTeam}
      squad={mockSquad}
      game={mockGame}
      display={mockDisplay}
      history={mockHistory}
    />)
  })

  it('should call fetchTeam when fetchTeam is called', () => {
    wrapper.instance().fetchTeam('www.team.com')

    expect(mockFetchTeam).toHaveBeenCalled()
  })

  it('should call fetchSquad when fetchSquad is called', () => {
    wrapper.instance().fetchSquad('www.team.com')

    expect(mockFetchSquad).toHaveBeenCalled()
  })

  it('should call fetchGame when fetchGame is called', () => {
    wrapper.instance().fetchGame('www.team.com')

    expect(mockFetchGame).toHaveBeenCalled()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

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