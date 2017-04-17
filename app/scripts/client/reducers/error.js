import I from 'immutable'
import {
  SET_ERROR,
  REMOVE_ERROR,
} from '../actions/error'

class _Error extends I.Record({
  content: '',
}) {}

const setError = ({content}) => new _Error({content})

const notification = (state, action) => {
  switch (action.type) {
    case SET_ERROR: return setError(action)
    case REMOVE_ERROR: return {}
    default: return {}
  }
}

export default notification
