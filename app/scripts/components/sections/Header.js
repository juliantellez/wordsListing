import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import Formsy from 'formsy-react'
import Input from '../forms/Input'

import InputCard from '../helpers/InputCard'
import TypeWriter from '../helpers/TypeWriter'

import {wordsLength} from 'src/utils/tally'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  static propTypes = {
    inputLimits: PropTypes.array,
  }

  static contextTypes = {
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _setError = error => {
    const {store, actions} = this.context
    store.dispatch(actions.error.setError(error))
  }

  _onValid = () => {
    const {store, actions} = this.context
    const {wordsInput} = this.state
    store.dispatch(actions.error.removeError())
    store.dispatch(actions.tally.setCounters(wordsInput))
  }

  _onInvalid = () => {
    const {inputLimits: [minLength, maxLength]} = this.props
    const length = this._getWordsLength()
    let error
    if (length <= minLength) {
      error = `Please insert a min of ${minLength} words`
    } else if (length > maxLength) {
      error = `You have reached the maximum limit of ${maxLength} words`
    }
    if (!_.isNil(error)) {
      this._setError(error)
    }
  }

  _onChange = currentValues => {
    this.setState(currentValues)
  }

  _getWordsLength = () => {
    const {wordsInput} = this.state
    return wordsLength(wordsInput)
  }

  _getInputLabel () {
    const {inputLimits: [minWords, maxWords]} = this.props
    const length = this._getWordsLength()
    return length <= minWords ? `${minWords} words min` : `${maxWords} words max`
  }

  _hasNumbersAlert = () => this._setError('Only words are allowed')

  render () {
    const {inputLimits: [minWords, maxWords]} = this.props
    return (
      <div className='Header'>
        <div className={cls('title')}>WordListing App</div>
        <Formsy.Form
          className={cls('form')}
          onValid={this._onValid}
          onChange={this._onChange}
          onInvalid={this._onInvalid}
        >
          <InputCard
            title='Please enter some text'
            label={this._getInputLabel()}
          >
            <Input
              textArea
              name='wordsInput'
              className={cls('input')}
              validations={{minWords, maxWords, noNumbers: true}}
              validationError={{
                noNumbers: this._hasNumbersAlert(),
              }}
            />
          </InputCard>
        </Formsy.Form>
      </div>
    )
  }
}
