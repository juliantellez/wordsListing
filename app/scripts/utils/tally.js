const length = type => value => value ? value.split(type).length : 0
const wordsLength = length(' ')
const commasLength = length(',')
const fullStopsLength = length('.')

export default {
  wordsLength,
  commasLength,
  fullStopsLength,
}
