import _ from 'lodash'
import formatter from './formatters'

const length = type => value => {
  let length = 0
  if (!_.isNil(value)) {
    length = formatter.ESCAPE_NON_GRAMMATICAL_COMMAS(
      formatter.ESCAPE_NON_GRAMMATICAL_DOTS(
      formatter.FILTER(value)))
    .trim()
    .split(type)
    .length - 1
  }
  return length
}

const commasLength = length(',')
const fullStopsLength = length('.')

const wordsLength = value => {
  let length = 0
  if (!_.isNil(value)) {
    length = formatter.FILTER(value)
    .trim()
    .split(' ')
    .filter(w => w.match(/([a-z])/i))
    .length
  }
  return length
}

export default {
  wordsLength,
  commasLength,
  fullStopsLength,
}
