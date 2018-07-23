import React from 'react';
import { Header } from './Header';
import { shallow, mount } from 'enzyme';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import { MemoryRouter } from 'react-router-dom';

describe.skip('Header', () => {

  let wrapper;
  let mockFetchSchedule;
  let mockHandleScheduleFetch;

  beforeEach(() => {
    mockHandleScheduleFetch = jest.fn();
    mockFetchSchedule = jest.fn();
    wrapper = mount(
    <MemoryRouter>
      <Header
        handleScheduleFetch={mockHandleScheduleFetch}
        fetchSchedule={mockFetchSchedule}
      />
    </MemoryRouter>
    )
  })

  it('handleClick should call handleLeagueFetch if it receives a string of "leagues"', () => {
    wrapper.find('.team-one').simulate('click');
    expect(mockHandleScheduleFetch).toHaveBeenCalled();
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should call fetchSchedule when handleScheduleFetch is called', () => {
    wrapper.instance().handleScheduleFetch()

    expect(fetchSchedule).toHaveBeenCalled();
  })
})