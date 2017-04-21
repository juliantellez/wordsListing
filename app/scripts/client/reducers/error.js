import {
  SET_ERROR,
  REMOVE_ERROR,
} from '../actions/error'
import _Error from './definitions/Error'
const setError = ({content}) => new _Error({content})

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR: return setError(action)
    case REMOVE_ERROR: return {}
    default: return {}
  }
}
