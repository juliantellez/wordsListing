import I from 'immutable'
import {
  SET_LISTS,
} from '../actions/lists'

class Lists extends I.Record({
  List: '',
}) {}

const content = content => {
  content.replace(/([^a-zA-Z0-9 .,])/g, '')
}
const setLists = ({content}) => {
  return new Lists({content})
}

export default (state = new Lists(), action) => {
  switch (action.type) {
    case SET_LISTS: return setLists(action)
    default: return {}
  }
}