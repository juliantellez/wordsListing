import { combineReducers } from 'redux'
import error from './error'
import tally from './tally'

export default combineReducers({
  error,
  tally,
})
