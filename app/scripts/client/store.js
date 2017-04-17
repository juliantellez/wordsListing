import _ from 'lodash'
import {
  createStore,
  applyMiddleware,
} from 'redux'

import reducers from './reducers'

function thunkMiddleware (store) {
  return dispatch => {
    return action => {
      if (_.isFunction(action)) {
        return action(store)
      } else {
        return dispatch(action)
      }
    }
  }
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)
store.id = Math.random()

export default store
