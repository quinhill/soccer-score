import React from 'react';
import { Game } from './Game';
import { shallow } from 'enzyme';
import { mockGame } from '../../__mocks__/gameMocks';
import { cleanTime } from './timeCleaner';

describe('Game', () => {

  describe('handleClick', () => {

    let wrapper;
    let mockFetchTeam;
    let mockProps;
    let mockEvent;
    let mockFetchSquad;
    let mockFetchGame;
    let mockEvent2;

    beforeEach(() => {
      mockEvent = {
        target: {
          value: "teamId",
          id: "seasonId"
        }
      }
      mockEvent2 = {
        target: {
          id: "gameId"
        }
      }
      mockFetchTeam = jest.fn();
      mockFetchSquad = jest.fn();
      mockFetchGame = jest.fn();
      mockProps = mockGame;
      
      wrapper = shallow(<Game
        fetchTeam={mockFetchTeam}
        fetchSquad={mockFetchSquad}
        fetchGame={mockFetchGame}
        {...mockProps}
        />);
      })
      
    it('should call fetchTeam through props when handleClick is called', () => {
      wrapper.instance().handleClick(mockEvent)
        
      expect(mockFetchTeam).toHaveBeenCalled()
    });

    it('should call fetchSquad through props when handleClick is called', () => {
      wrapper.instance().handleClick(mockEvent)

      expect(mockFetchSquad).toHaveBeenCalled()
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call fetchGame throught props when getGame is invoked', () => {
      wrapper.instance().getGame(mockEvent2);

      expect(mockFetchGame).toHaveBeenCalled();
    })
  })

  describe('cleanTime', () => {
    it('should clean the time to be displayed', () => {
      const mockTime = '14:00:00';
      const expected = '2:00PM'
      const result = cleanTime(mockTime);

      expect(result).toEqual(expected)
    })
  })
})