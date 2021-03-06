import _ from 'lodash'
import formatter from './formatters'

const length = type => value => {
  let length = 0
  if (!_.isNil(value)) {
    length = formatter.FORMAT_PUNCTUATION(value)
    .trim()
    .split(type)
    .length - 1
  }
  return length
}

const commasLength = length(',')
const fullStopsLength = length('.')
const wordsLength = value => value ? formatter.FILTER_WORDS(value).length : 0

export default {
  wordsLength,
  commasLength,
  fullStopsLength,
}
