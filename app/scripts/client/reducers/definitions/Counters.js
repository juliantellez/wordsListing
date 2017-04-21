import I from 'immutable'

export default class Counters extends I.Record({
  words: 0,
  commas: 0,
  fullStops: 0,
}) {}
