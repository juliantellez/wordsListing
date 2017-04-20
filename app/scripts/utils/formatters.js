const SINGLE_SPACE = value => value.replace(/\s{2,}/g, ' ')
const SINGLE_DOTS = value => value.replace(/\.{2,}/g, '.')
const SINGLE_COMMAS = value => value.replace(/,{2,}/g, ',')
const IGNORE_SPECIAL_CHARS = value => value.replace(/([^a-zA-Z0-9 .,])/g, '')
const ESCAPE_NON_GRAMMATICAL_COMMAS = value => value.replace(/(\s),{1,}/g, '')
const ESCAPE_NON_GRAMMATICAL_DOTS = value => value.replace(/(\s)\.{1,}/g, '')

const FILTER = value =>
  IGNORE_SPECIAL_CHARS(
    SINGLE_COMMAS(
      SINGLE_DOTS(
        SINGLE_SPACE(value))))

export default {
  FILTER,
  SINGLE_SPACE,
  SINGLE_DOTS,
  SINGLE_COMMAS,
  IGNORE_SPECIAL_CHARS,
  ESCAPE_NON_GRAMMATICAL_COMMAS,
  ESCAPE_NON_GRAMMATICAL_DOTS,
}
