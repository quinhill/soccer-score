export const displayReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return action.clicked
    default:
      return state
  }
}