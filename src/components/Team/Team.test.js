import React from 'react';
import { Team } from './Team';
import { shallow } from 'enzyme';
import { mapStateToProps } from './Team';

describe('Team', () => {
  it('should match snapshot', () => {
    const mockSquad = {id: 'some string'};
    const wrapper = shallow(<Team
      squad={mockSquad}
      />);
    
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const initialState = {
        isLoading: false,
        team: {id: 'some string'}
      }
      const mockSquad = {id: 'some string'}
      const expected = {
        squad: mockSquad
      }
  
      const result = mapStateToProps(initialState);
  
      expect(result).toEqual(expected);
    })
  })
})