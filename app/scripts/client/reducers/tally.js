import I from 'immutable'
import {
  SET_COUNTERS,
  REMOVE_COUNTERS,
} from '../actions/tally'

import {
  wordsLength,
  commasLength,
  fullStopsLength,
} from 'src/utils/tally'

class Counters extends I.Record({
  words: 0,
  commas: 0,
  fullStops: 0,
}) {}

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
