import {wordsLength} from './tally'
import Formsy from 'formsy-react'

function minWords (values, value, min) {
  const length = wordsLength(value)
  return length > min
}

function maxWords (values, value, max) {
  const length = wordsLength(value)
  return length < max
}

Formsy.addValidationRule('minWords', minWords)
Formsy.addValidationRule('maxWords', maxWords)
