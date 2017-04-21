import {
  SET_LISTS,
  REMOVE_LISTS,
} from '../actions/lists'

import formatters from 'src/utils/formatters'
import WordsMap from './definitions/WordsMap'

const setLists = ({content}, prevState) => {
  const list = formatters.FILTER_WORDS(content)
  return new WordsMap(list)
}

export default (state = new WordsMap(), action) => {
  switch (action.type) {
    case SET_LISTS: return setLists(action)
    case REMOVE_LISTS: return {}
    default: return state
  }
}
