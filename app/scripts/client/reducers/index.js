import { combineReducers } from 'redux'

import error from './error'
import tally from './tally'
import lists from './lists'

export default combineReducers({
  error,
  tally,
  lists,
})
