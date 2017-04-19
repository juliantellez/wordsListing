export const SET_COUNTERS = 'SET_COUNTERS'
export const REMOVE_COUNTERS = 'REMOVE_COUNTERS'

export default {
  setCounters: content => ({
    type: SET_COUNTERS,
    content,
  }),
  removeCounters: () => ({
    type: REMOVE_COUNTERS,
  }),
}
