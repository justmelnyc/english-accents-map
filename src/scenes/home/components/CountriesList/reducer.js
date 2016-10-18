import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES } from './actions'

const initialState = {
  loading: true,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return { ...state, loading: true }
    case RECEIVE_COUNTRIES:
      return { ...state, loading: false, items: action.payload.items }
    default:
      return state
  }
}