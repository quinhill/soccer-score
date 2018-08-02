import { fetchGame } from '../fetchGame'
import { isLoading } from '../../actions/isLoadingAction';
import { hasErrored } from '../../actions/hasErroredAction';
import { fetchGameSuccess } from '../../actions/fetchGameAction';
import { mockGame } from '../../__mocks__/gameMocks'
import { cleanGame } from '../cleaners/gameCleaner';

describe('fetchGame', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchGame(mockUrl)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))

    const thunk = fetchGame(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchGame(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })


  it('should dispatch fetchGame with the correct param', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockGameClean
      })
    }))
    const thunk = fetchGame(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchGameSuccess(mockGame))
  })
})