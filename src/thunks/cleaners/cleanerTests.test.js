import { cleanGame } from './gameCleaner';
import { mockCleanGameData, cleanedMockGameData } from '../../__mocks__/mockCleanGameData';
import { cleanLive } from './liveCleaner';
import { mockCleanLiveData, mockExpected } from '../../__mocks__/mockCleanLiveData';

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
    const expected = mockExpected;
    const mockData = mockCleanLiveData;
    const result = cleanLive(mockData)

    expect(result).toEqual(expected)
  })
})

describe('cleanPlayer', () => {

  it('should clean the player data', () => {
    
  })
})