const SINGLE_SPACE = value => value.replace(/\s{2,}/g, ' ')
const SINGLE_DOTS = value => value.replace(/\.{2,}/g, '.')
const SINGLE_COMMAS = value => value.replace(/,{2,}/g, ',')
const IGNORE_SPECIAL_CHARS = value => value.replace(/([^a-zA-Z0-9 .,])/g, '')
const ESCAPE_NON_GRAMMATICAL_COMMAS = value => value.replace(/(\s),{1,}/g, '')
const ESCAPE_NON_GRAMMATICAL_DOTS = value => value.replace(/(\s)\.{1,}/g, '')

const FORMAT_VALUE = value =>
  IGNORE_SPECIAL_CHARS(
    SINGLE_COMMAS(
      SINGLE_DOTS(
        SINGLE_SPACE(value))))

const FORMAT_PUNCTUATION = value =>
  ESCAPE_NON_GRAMMATICAL_COMMAS(
    ESCAPE_NON_GRAMMATICAL_DOTS(
      FORMAT_VALUE(value)))

const FILTER_WORDS = value =>
  FORMAT_VALUE(value)
  .trim()
  .split(' ')
  .filter(w => w.match(/\w/i)) // Match words only
  .map(w => w.replace(/[^\w]/g, '')) // Allow words only

export default {
  SINGLE_DOTS,
  FORMAT_VALUE,
  FILTER_WORDS,
  SINGLE_SPACE,
  SINGLE_COMMAS,
  FORMAT_PUNCTUATION,
  IGNORE_SPECIAL_CHARS,
  ESCAPE_NON_GRAMMATICAL_DOTS,
  ESCAPE_NON_GRAMMATICAL_COMMAS,
}
