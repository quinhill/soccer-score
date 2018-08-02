export const squad = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SQUAD_SUCCESS':
      return action.squad
    default:
      return state
  }
}