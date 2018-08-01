import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';
import { fetchSchedule } from '../../thunks/fetchSchedule';

describe('Header', () => {

  let wrapper;
  let mockFetchSchedule;

  beforeEach(() => {
    mockFetchSchedule = jest.fn();
    wrapper = shallow(<Header
        fetchSchedule={mockFetchSchedule}
      />)
  })

  it('handleClick should call handleLeagueFetch if it receives a string of leagues', () => {
    const spy = spyOn(wrapper.instance(), 'handleScheduleFetch')
    wrapper.instance().handleClick('games')
    expect(spy).toHaveBeenCalled();
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchSchedule when handleScheduleFetch is called', () => {
    wrapper.instance().handleScheduleFetch()

    expect(mockFetchSchedule).toHaveBeenCalled();
  })
})