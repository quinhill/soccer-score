import { cleanGame } from './gameCleaner';
import { mockCleanGameData, cleanedMockGameData } from '../../__mocks__/mockCleanGameData';
import { cleanLive } from './liveCleaner';
import { mockCleanLiveData, mockExpectedLive } from '../../__mocks__/mockCleanLiveData';
import { cleanPlayer } from './playerCleaner';
import { mockPlayerData, mockExpectedPlayer } from '../../__mocks__/mockPlayerCleaner';

describe('cleanGame', () => {

  it('should clean the game object', () => {
    const expected = cleanedMockGameData;
    const mockData = mockCleanGameData;
    const result = cleanGame(mockData);

    expect(result).toEqual(expected);
  })
})

describe('liveCleaner', () => {

  it('should clean the live games object', () => {
    const expected = mockExpectedLive;
    const mockData = mockCleanLiveData;
    const result = cleanLive(mockData)

    expect(result).toEqual(expected)
  })
})

describe('cleanPlayer', () => {

  it('should clean the player data', () => {
    const expected = mockExpectedPlayer
    const mockData = mockPlayerData;
    const result = cleanPlayer(mockData);

    expect(result).toEqual(expected);
  })
})

describe('cleanSquad', () => {
  it('should clean the squad data', () => {
    
  })
})