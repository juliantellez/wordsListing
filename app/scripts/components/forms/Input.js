import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HOC as FormsyElement} from 'formsy-react'

const cls = elem => `Input-${elem}`

class Input extends React.Component {
  static propTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    textArea: PropTypes.bool,
    showError: PropTypes.func,
    placeHolder: PropTypes.node,
    isFormSubmitted: PropTypes.func,
    validationError: PropTypes.string,
    name: PropTypes.string.isRequired,
  }

  state = {
    value: '',
  }

  _onChange (e) {
    this.props.setValue(e.currentTarget.value)
  }

  _getValue () {
    return this.props.getValue() || this.state.value
  }

  _getInput () {
    const element = this.props.textArea ? 'textarea' : 'input'
    return React.createElement(element, {
      className: cls('field'),
      value: this._getValue(),
      onChange: this._onChange.bind(this),
    })
  }

  _shouldShowErrors () {
    return (
      this.props.isFormSubmitted() &&
      this.props.showError()
    )
  }

  _getPlaceHolder () {
    const length = this._getValue().length
    if (length > 0) {
      return null
    }
    return (
      <div className={cls('placeholder')}>
        {this.props.placeHolder}
      </div>
    )
  }

  _getErrors () {
    if (!this._shouldShowErrors()) {
      return null
    }
    const {validationError} = this.props
    let error = 'This field is invalid'
    if (typeof validationError === 'string') {
      error = validationError
    }
    return (
      <div className={cls('error')}>
        {error}
      </div>
    )
  }

  render () {
    const {name} = this.props
    const className = classnames('Input', {
      [`Input-${name}`]: name,
    }, this.props.className)
    return (
      <div className={className} >
        {this._getPlaceHolder()}
        {this._getInput()}
        {this._getErrors()}
      </div>
    )
  }
}

export default FormsyElement(Input)
