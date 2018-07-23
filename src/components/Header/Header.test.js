import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';

describe('Header', () => {

  let wrapper;
  let mockFetchSchedule;

  beforeEach(() => {
    mockFetchSchedule = jest.fn();
    wrapper = shallow(<Header
      fetchSchedule={mockFetchSchedule}
    />)
  })

  it.skip('handleClick should call handleLeagueFetch if it receives a string of "leagues"', () => {
    wrapper.instance().handleClick('games')
    expect(handleScheduleFetch).toHaveBeenCalled();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchSchedule when handleScheduleFetch is called', () => {
    wrapper.instance().handleScheduleFetch()

    expect(mockFetchSchedule).toHaveBeenCalled();
  })
})