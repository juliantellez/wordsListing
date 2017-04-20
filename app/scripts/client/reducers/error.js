import I from 'immutable'
import {
  SET_ERROR,
  REMOVE_ERROR,
} from '../actions/error'

class _Error extends I.Record({
  content: '',
}) {}

const setError = ({content}) => {
  console.log(content, 'setError')
  return new _Error({content})
}

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR: return setError(action)
    case REMOVE_ERROR: return {}
    default: return {}
  }
}
