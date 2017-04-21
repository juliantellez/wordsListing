import {
  SET_COUNTERS,
  REMOVE_COUNTERS,
} from '../actions/tally'

import {
  wordsLength,
  commasLength,
  fullStopsLength,
} from 'src/utils/tally'
import Counters from './definitions/Counters'

const setCounters = ({content}) => {
  return new Counters({
    words: wordsLength(content),
    commas: commasLength(content),
    fullStops: fullStopsLength(content),
  })
}

export default (state = new Counters(), action) => {
  switch (action.type) {
    case SET_COUNTERS: return setCounters(action)
    case REMOVE_COUNTERS: return {}
    default: return state
  }
}
