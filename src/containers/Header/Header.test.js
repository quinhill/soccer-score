import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './Header';

describe('Header', () => {

  let wrapper;
  let mockFetchLiveScores;
  let mockFetchLeague;
  let mockSetDisplay;
  let mockLiveScores;

  beforeEach(() => {
    mockLiveScores = [{}, {}]
    mockFetchLiveScores = jest.fn();
    mockFetchLeague = jest.fn();
    mockSetDisplay = jest.fn();
    wrapper = shallow(<Header
        fetchLiveScores={mockFetchLiveScores}
        fetchLeague={mockFetchLeague}
        setDisplay={mockSetDisplay}
        liveScores={mockLiveScores}
      />)
  })

  it('should call setDisplay in MDTP when setDisplay is called', () => {
    wrapper.instance().setDisplay()

    expect(mockSetDisplay).toHaveBeenCalled()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {

    it('should return a props object with a liveScores array', () => {
      const mockState = {
        liveScores: [{}, {}],
        game: {},
        team: { id: 'teamId' }
      }
      const expected = {
        liveScores: [{}, {}]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with an fetchLiveScores action  when fetchLiveScores is called', () => {
      const mockDispatch = jest.fn()
      const url = 'http://somestring.com';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchLiveScores(url)

      expect(mockDispatch).toHaveBeenCalled()
    })

    it('calls dispatch with a setDisplay action when setDisplay is called', () => {
      const mockDispatch = jest.fn()
      const clicked = 'team';

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setDisplay(clicked)

      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})