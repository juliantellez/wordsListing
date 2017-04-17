export const SET_ERROR = 'SET_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export default {
  setError: content => ({
    type: SET_ERROR,
    content,
  }),
  removeError: () => ({
    type: REMOVE_ERROR,
  }),
}
