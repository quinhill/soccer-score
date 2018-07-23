import React from 'react';
import { Game } from './Game';
import { shallow, mount } from 'enzyme';

describe('Game', () => {

  describe('handleClick', () => {

    let wrapper;
    let mockFetchTeam;
    let mockProps;

    beforeEach(() => {
      mockFetchTeam = jest.fn();
      mockProps = {
        competitors: [
          {id: 'sr:competitor:2900'},
          {id: 'sr:competitor:1000'}
        ]
      }
      
      wrapper = mount(<Game
        fetchTeam={mockFetchTeam}
        {...mockProps}
        />);
      })
      
    it('should call fetchTeam through props', () => {
      wrapper.find('.team-one').simulate('click')
        
      expect(mockFetchTeam).toHaveBeenCalled()
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

})